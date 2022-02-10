# -*- coding: utf-8 -*-
from datetime import datetime, timedelta
from email import header
import jwt
from typing import Optional

from fastapi import Depends, FastAPI, HTTPException
from starlette import status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from passlib.context import CryptContext # passlib 处理哈希加密的包
from pydantic import BaseModel


# to get s string liek this run : openssl rand -hex 32
SECRET_KEY = "177f917ae2c1b681b358c65093213b01a1d8d21a51b129ac1e66a91153171238" #密钥
ALGORITHM = "HS256" # 算法
ACCESS_TOKEN_EXPIRE_MINUTES = 30 #访问令牌过去分钟

# 用户数据
fake_users_db = {
    "johndoe":{
        "username":"johndoe",
        "full_name": "John Doe",
        "email": "johndoe@example.com",
        "hashed_password": "$2b$12$4EfjFW82/AlK7ObWSj0U6Oa6z/Xh6iv7n/XHDDrvUwVD1riWHQ8wW",
        "disabled": False,
    },
}

class Token(BaseModel): #令牌空壳
    access_token: str
    token_type: str
class TokenData(BaseModel): #令牌数据
    username: str = None
# 用户信息模型
class User(BaseModel):
    username: str
    email: Optional[str] = None
    full_name: Optional[str] = None
    disabled: Optional[bool] = None
# 用户输入模型
class UserInDB(User):
    hashed_password: str
    
# Context是上下文 CryptContext是密码上下文 schemes是计划  deprecated是不赞成（强烈反对）
# bcrypt是加密算法
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/token")

app = FastAPI()

#verify_password 验证密码
#plain_password 普通密码
#hashed_password 哈希密码

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

#获取哈希密码
def get_password_hash(password):
    return pwd_context.hash(password)


# 获取用户
def get_user(db, username: str):
    if username in db:
        user_dict = db[username]
        return UserInDB(**user_dict)
    return None

#验证用户
def authenticate_user(fake_db, username: str, password: str):
    user = get_user(fake_db, username)
    if not user or not verify_password(password, user.hashed_password):
        return HTTPException(
          status_code=status.HTTP_401_UNAUTHORIZED,
          detail="Incorrent username or password",
          headers={"WWW-Authenticate": "Bearer"}
        )
    return user
  
#创建访问令牌
def create_access_token(*, data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta #expire令牌到期时间
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    print('encoded_jwt',encoded_jwt)
    return encoded_jwt
  

async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"}
        )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get('sub')
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except jwt.PyJWTError:
        raise credentials_exception
    user = get_user(fake_users_db, username=token_data.username)
    if user is None:
        raise credentials_exception

async def get_current_active_user(current_user: User = Depends(get_current_user)):
    if current_user.disabled:
        raise HTTPException(
            status_code=400,
            detail="Inactive user"
        )
    return current_user


@app.post('/token')
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    #1.验证用户
    user = authenticate_user(fake_users_db, form_data.username, form_data.password)
    #2. access_token_expires访问令牌过期
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    #3. 创建访问令牌
    access_token = create_access_token(
        data = {"sub": user.username},
        expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}
  
  
@app.get("/users/me")  
async def read_users_me(current_user: User = Depends(get_current_active_user)):
    return current_user;
  
@app.get("/users/me/items/")
async def read_own_items(current_user: User = Depends(get_current_active_user)):
    return [{"item_id": "Foo", "owner": current_user.username}]

  
if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app="s_4:app", host="127.0.0.1", port=8000, reload=True)