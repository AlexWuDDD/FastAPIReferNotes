# -*- coding: utf-8 -*-

from fastapi import Depends, FastAPI, Header, HTTPException


app = FastAPI()

async def verify_token(x_token: str = Header(...)):
    if x_token != "fake-super-secret-token":
        raise HTTPException(status_code=400, detail="X-Token header invalid")

async def verify_key(x_key: str = Header(...)):
    if x_key != "fake-super-secret-key":
        raise HTTPException(status_code=400, detail="X-Key header invalid")
    return x_key

@app.get("/items/", dependencies=[Depends(verify_token), Depends(verify_key)])
async def read_items():
    return [{"item":"Foo"}, {"item": "Bar"}]

  
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app="d_4:app", host="127.0.0.1", port=8000, reload=True)
    
    
'''
什么是“依赖注入”?

前提是:
有共享逻辑（一次又一次地使用相同的代码）
共享数据库连接
强制执行安全性，身份验证，角色要求等
还有很多其他事情

'''