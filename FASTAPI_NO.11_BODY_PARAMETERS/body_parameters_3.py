# -*- coding: utf-8 -*-

from fastapi import FastAPI, Path, Body
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    description: str = None
    price: float
    tax: float = None


# 嵌入一个body的参数
@app.put("/items/{item_id}")
async def read_item(
    *,
    item_id: int,
    item: Item = Body(..., embed=True),
):
    result = {"item_id": item_id, "item": item}
    return result


if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app='body_parameters_3:app', host='127.0.0.1', port=8000, debug=True, reload=True)

