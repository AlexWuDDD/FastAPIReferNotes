# -*- coding: utf-8 -*-
import email
from fastapi import FastAPI
from pydantic import BaseModel, EmailStr
from typing import List

app = FastAPI()

class Item(BaseModel):
    name: str
    description: str = None
    price: float
    tax: float = 10.5
    tags: List[str] = []

items = {
    "foo": {"name": "Foo", "price": 50.2},
    "bar": {"name": "Bar", "description": "The bartenders", "price": 62, "tax": 20.0},
    "baz": {"name": "Baz", "description": None, "price": 50.0, "tax": 10.2, "tags": []},
}

#response_modle_exexclude_unset=True 一些默认值将不包括在响应中，仅包含实际设置的值    
@app.post("/items/", response_model=Item, response_model_exclude_unset=True)
async def create_item(item_id: str):
    return items[item_id]

#response_model_exclude={"tax"} 是排除tax字段
@app.get("/items/{item_id}/public", response_model=Item, response_model_exclude={"tax"})
async def read_item_public_data(item_id: str):
    return items[item_id]  
  
  
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app="ResponseModel_3:app", host="127.0.0.1", port=8000, reload=True, debug=True)