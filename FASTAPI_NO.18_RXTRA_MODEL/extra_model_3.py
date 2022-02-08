# -*- coding: UTF-8 -*-
from typing import Union
from fastapi import FastAPI
from pydantic import BaseModel, EmailStr

app = FastAPI()

class BaseItem(BaseModel):
    description: str
    type: str

class CarItem(BaseItem):
    type = 'car'
    
class PlaneItem(BaseItem):
    type = 'plane'
    size: int
    
    
items = {
    "item1": {"description": "All my friends drive a low rider", "type": "car"},
    "item2": {
        "description": "Music is my aeroplane, it's my aeroplane",
        "type": "plane",
        "size": 5,
    }
}

@app.get("/items/{item_id}", response_model=Union[CarItem, PlaneItem])
async def read_item(item_id: str):
    return items[item_id]

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app='extra_model_3:app', host='127.0.0.1', port=8000, reload=True)
