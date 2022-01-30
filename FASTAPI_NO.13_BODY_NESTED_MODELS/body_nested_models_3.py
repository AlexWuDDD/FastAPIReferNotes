# -*- codeing: utf-8 -*-
from fastapi import FastAPI, Body
from pydantic import BaseModel, Field, HttpUrl
from typing import List, Set, Dict

app = FastAPI()

class Image(BaseModel):
    url: HttpUrl
    name: str

  
@app.post("/items/multiple/")
async def create_multiple_images(*, images: List[Image]):
    return images

@app.post("/index-weights/")
async def create_index_weights(weights: Dict[int, float]):
    return weights

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app='body_nested_models_3:app', host='127.0.0.1', port=8000, reload=True, debug=True)
