from pip import main
from pydantic import BaseModel
from fastapi import FastAPI, HTTPException, Depends

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from sqlalchemy import Boolean, Column, Integer, String

"""数据库初始化"""
SQLALCHEMY_DATABASE_URL = "sqlite:///db_test_1.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
#仅适用于SQLite。其他数据库不需要。链接参数：检查同一条线？即需要多线程连接

#通过sessionmaker得到一个类，一个能产生session的工厂
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
             # 会话生成器   自动提交            自动刷新
Base = declarative_base() #数据库结构用ORM的语言描述出来

class M_User(Base): #声明数据库某表的属性与结构
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)
    
class UserBase(BaseModel):
    email: str

class UserCreate(UserBase):
    password: str
    
class UserInDB(UserBase):
    id: int
    is_active: bool
    class Config:
        orm_mode = True
        
Base.metadata.create_all(bind=engine) #到这里就会新建数据库和表（原来没有）

app = FastAPI()

"""开始数据库操作(依赖项)"""
def get_db():
    try:
        db = SessionLocal() #这时，才会产生一个“会话”，并且用完要关闭
        yield db
    finally:
        db.close()
        print("数据库已关闭")

"""数据库操作方法"""
#通过id查询用户信息
def get_user(db:Session, usr_id: int):
    CCCCCC = db.query(M_User).filter(M_User.id == usr_id).first()
    print('CCCCCC', CCCCCC)
    return CCCCCC

if __name__ == "__main__":
    for i in get_db():
        c = get_user(db=i, usr_id=1)
        
