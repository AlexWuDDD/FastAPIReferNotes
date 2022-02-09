# -*- coding: utf-8 -*-
from fastapi import Depends, FastAPI
import time

app = FastAPI()

async def common_parameters(q: str=None, skip: int=0, limit:int = 100):
    limit += 66
    return {"q": q, "skip": skip, "limit": limit}
  
@app.get("/items/")
async def read_items(commons: dict = Depends(common_parameters)):
    # 什么可以作为一个依赖？要'可调用的'比如说类、函数、包等
    commons['skip'] += 10
    return commons
  

@app.get("/users/")
async def read_users(commons: dict = Depends(common_parameters)):
    return commons
  
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app="d_1:app", host="127.0.0.1", port=8000, reload=True)
    
    
'''
什么是“依赖注入”?

前提是:
有共享逻辑（一次又一次地使用相同的代码）
共享数据库连接
强制执行安全性，身份验证，角色要求等
还有很多其他事情

'''