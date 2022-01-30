# -*- codeing: utf-8 -*-
from fastapi import FastAPI, Body
from pydantic import BaseModel, Field
from typing import List, Set

app = FastAPI()

class Item(BaseModel):
    name: str
    description: str    = None
    price: float
    tax: float          = None
    tags0: list         = []
    tags1: List[str]    = []
    tags2: Set[str]     = set()

@app.put("/items/{item_id}")
async def update_item(*, item_id: int, item: Item):
    results = {"item_id":item_id, "item": item}
    return results

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app='body_nested_models_1:app', host='127.0.0.1', port=8000, reload=True, debug=True)
