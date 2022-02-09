# -*- coding: utf-8 -*-
from msvcrt import kbhit
from fastapi import Depends, FastAPI, Cookie
import time

app = FastAPI()

#多次依赖

def query_extractor(q: str = None):
    return q

def query_or_cookie_extractor(
    q: str = Depends(query_extractor), last_query: str = Cookie(None)
):
    print(q, last_query)
    if not q:
        return last_query
    return q

@app.get("/items/")
async def read_query(query_or_default: str = Depends(query_or_cookie_extractor)):
    return {"q_or_cookie": query_or_default}

  
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app="d_3:app", host="127.0.0.1", port=8000, reload=True)
    
    
'''
什么是“依赖注入”?

前提是:
有共享逻辑（一次又一次地使用相同的代码）
共享数据库连接
强制执行安全性，身份验证，角色要求等
还有很多其他事情

'''