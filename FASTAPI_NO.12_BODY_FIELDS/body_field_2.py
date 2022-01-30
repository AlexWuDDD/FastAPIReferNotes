# -*- codeing: utf-8 -*-
from fastapi import FastAPI, Body
from pydantic import BaseModel, Field

app = FastAPI()

class Item(BaseModel):
    name: str
    description: str = None
    price: float = Field(..., ge=0)
    tax: float = None

@app.put("/items/{item_id}")
async def update_item(
    *,
    item_id: int, 
    item: Item = Body(..., 
        example={ # example是body里没有的字段，不会添加任何验证，而只会添加注释，不是example也不行
            "name": "Foo",
            "description": "A very nice Item",
            "price": 0,
            "tooooooo": 0.1,
        }
    )
):
    results = {"item_id":item_id, "item": item}
    return results

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app='body_field_2:app', host='127.0.0.1', port=8000, reload=True, debug=True)
