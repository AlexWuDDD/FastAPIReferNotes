# -*- codeing: utf-8 -*-
from fastapi import FastAPI, Body
from pydantic import BaseModel, Field

app = FastAPI()

class Item(BaseModel):
    name: str
    description: str = Field(None, title="The description of the item", max_length=6)
    price: float = Field(..., ge=0, description="The price must be greater than zero")
    tax: float = None

@app.put("/items/{item_id}")
async def update_item(
    *,
    item_id: int, 
    item: Item = Body(..., embed=True),
):
    results = {"item_id":item_id, "item": item}
    return results

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app='body_field_1:app', host='127.0.0.1', port=8000, reload=True, debug=True)
