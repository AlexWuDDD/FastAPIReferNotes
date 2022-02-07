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


items = {
    "foo": {"name": "Foo", "price": 50.2},
    "bar": {"name": "Bar", "description": "The bartenders", "price": 62, "tax": 20.0},
    "baz": {
        "name": "Baz", 
        "description": None, 
        "price": 50.0, 
        "tax": 10.2,},
}


@app.get(
  "/items/{item_id}/name",
  response_model=Item,
  response_model_include=["name", "description", "tax"],
)  
async def read_item_name(item_id: str):
    return items[item_id]

@app.get("/items/{item_id}/public", response_model=Item, response_model_exclude=["tax"])
async def read_item_public_data(item_id: str):
    return items[item_id]

  
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app="ResponseModel_4:app", host="127.0.0.1", port=8000, reload=True, debug=True)