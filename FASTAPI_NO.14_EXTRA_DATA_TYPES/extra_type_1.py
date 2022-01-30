# -*- coding: utf-8 -*-
from datetime import datetime, time, timedelta
from uuid import UUID
from uuid import uuid1
from fastapi import FastAPI, Body


app = FastAPI()

@app.put("/item/{item_id}")
async def read_items(
    item_id: UUID,
    start_datetime: datetime = Body(None),
    end_datetime: datetime = Body(None),
    repeat_at: time = Body(None),
    process_after: timedelta = Body(None)
):
    start_process = start_datetime + process_after
    duration = end_datetime - start_process
    return {
        "item_id": item_id,
        "start_datetime": start_datetime,
        "end_datetime": end_datetime,
        "repeat_at": repeat_at,
        "process_after": process_after,
        "start_process": start_process,
        "duration": duration
    }

if __name__ == "__main__":
    import uvicorn
    print('uuid', uuid1())
    uvicorn.run(app='extra_type_1:app', host='127.0.0.1', port=8000, reload=True, debug=True)