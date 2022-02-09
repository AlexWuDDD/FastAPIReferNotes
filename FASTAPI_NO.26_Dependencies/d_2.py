# -*- coding: utf-8 -*-
from fastapi import Depends, FastAPI
import time

app = FastAPI()

#类作为依赖项
fake_items_db = [{"item_id": "Foo"}, {"item_id": "Bar"}, {"item_name": "Baz"}]

    
class CommonQueryParams:
    def __init__(self, q:str=None, skip:int=0, limit:int=100):
        #__init__用于创建类实例的方法，且这些参数是FastAPI将来用来“解决”依赖关系的参数
        self.q = q
        self.skip = skip
        self.limit = limit


@app.get("/items/")
async def read_items(commons: CommonQueryParams = Depends(CommonQueryParams)):
    # 什么可以作为一个依赖？要'可调用的'比如说类、函数、包等
    response = {}
    if commons.q:
        response.update({"q": commons.q})
    items = fake_items_db[commons.skip : commons.skip + commons.limit]
    response.update({"items": items})
    return response
  
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app="d_2:app", host="127.0.0.1", port=8000, reload=True)
    
    
'''
什么是“依赖注入”?

前提是:
有共享逻辑（一次又一次地使用相同的代码）
共享数据库连接
强制执行安全性，身份验证，角色要求等
还有很多其他事情

'''