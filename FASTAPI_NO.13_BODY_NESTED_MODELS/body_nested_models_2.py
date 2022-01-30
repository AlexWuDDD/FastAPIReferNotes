# -*- codeing: utf-8 -*-
from fastapi import FastAPI, Body
from pydantic import BaseModel, Field
from typing import List, Set

app = FastAPI()

class Image(BaseModel):
    url: str
    name: str

class Item(BaseModel):
    name: str
    description: str    = None
    price: float
    tax: float          = None
    tags: Set[str]      = set()
    image: Image        = None
    images: List[Image] = None

@app.put("/items/{item_id}")
async def update_item(*, item_id: int, item: Item):
    results = {"item_id":item_id, "item": item}
    return results

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app='body_nested_models_2  :app', host='127.0.0.1', port=8000, reload=True, debug=True)
