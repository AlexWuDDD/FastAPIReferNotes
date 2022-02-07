# -*- coding: utf-8 -*-
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Item(BaseModel):
    name: str
    description: str = None
    price: float
    tax: float = None
    tags: List[str] = []
    
@app.post("/items/", response_model=Item)
async def create_item(item: Item):
    return item
  
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app="ResponseModel_1:app", host="127.0.0.1", port=8000, reload=True, debug=True)