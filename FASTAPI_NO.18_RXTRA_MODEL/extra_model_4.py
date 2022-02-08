# -*- coding: UTF-8 -*-
from typing import List
from fastapi import FastAPI
from pydantic import BaseModel, EmailStr

app = FastAPI()

class Item(BaseModel):
    description: str
    name: str

    
    
items = [
    {"name": "Foo", "description": "There comes my hero"},
    {"name": "Red", "description": "It's my aeroplane"},
]

@app.get("/items/", response_model=List[Item])
async def read_item():
    return items

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app='extra_model_4:app', host='127.0.0.1', port=8000, reload=True)
