from datetime import datetime, timedelta
from webbrowser import get
import jwt
from typing import Optional

from fastapi import Depends, FastAPI, HTTPException
from starlette import status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
# from jwt import PyJWTError
from passlib.context import CryptContext # passlib 处理哈希加密的包
from pydantic import BaseModel


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

#verify_password 验证密码
#plain_password 普通密码
#hashed_password 哈希密码

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

#获取哈希密码
def get_password_hash(password):
    return pwd_context.hash(password)
  
if __name__ == "__main__":
    ###################本章节哈希验证用法###############
    # xxx = get_password_hash("cccccc")
    # yyy = get_password_hash("cccccc")
    # secret = get_password_hash("secret")
    # ppp = get_password_hash("177f917ae2c1b681b358c65093213b01a1d8d21a51b129ac1e66a91153171238")
    
    # print(xxx)
    # print(yyy)
    # print(secret)
    # print(ppp)
    # print('verify_password', verify_password("cccccc",xxx))
    # print('verify_password', verify_password("cccccc",yyy))
    # print('verify_password', verify_password("secret", secret))
    # print('verify_password', verify_password("177f917ae2c1b681b358c65093213b01a1d8d21a51b129ac1e66a91153171238", ppp))

    ##############本章节时间差(timedelta)###############
    aDay = timedelta(minutes=30) # timedela表示两个datetime之间的差异 
    now = datetime.now() + aDay
    print(aDay)
    print(datetime.now())
    print(now, type(now))