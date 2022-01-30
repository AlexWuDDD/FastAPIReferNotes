# -*- coding: utf-8 -*-

from fastapi import FastAPI, Path, Body
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    description: str = None
    price: float
    tax: float = None

class User(BaseModel):
    username: str
    full_name: str = None


# 多主体参数和查询
@app.put("/items/{item_id}")
async def read_item(
    *, 
    item_id: int, 
    item: Item, 
    user: User, 
    importantance:int = Body(..., gt=0),
    q: str = None
):
    result = {"item_id": item_id, "item": item, "user": user, "importantance": importantance}
    if q:
        result.update({"q": q})
    return result


if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app='body_parameters_4:app', host='127.0.0.1', port=8000, debug=True, reload=True)

