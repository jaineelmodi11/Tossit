from binascii import a2b_base64
import uvicorn
from fastapi import Form, FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from model import wasteClassification

from pydantic import BaseModel

from PIL import Image
import io
import sys
import logging

import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

origins = ["*"]

app = FastAPI()
model = wasteClassification()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

"""@app.post("/predict")
async def predict(formData: UploadFile = File(...)):

    if formData.content_type.startswith('image/') is False:
        raise HTTPException(
            status_code=400, detail=f'File \'{formData.filename}\' is not an image.')

    try:
        contents = await formData.read()
        pil_image = Image.open(io.BytesIO(contents)).convert('RGB')

        predicted_class = model.predictWaste(pil_image)

        logging.info(f"Predicted Class: {predicted_class}")
        return {
            "class": predicted_class,
        }

    except Exception as error:
        print("errorrrr")
        logging.exception(error)
        e = sys.exc_info()[1]
        raise HTTPException(status_code=500, detail=str(e))"""


@app.post("/predict")
async def predict2(dataIn: dict):

    try:
        data = dataIn['data']
        binary_data = a2b_base64(data.split(',')[1])

        # return {'data': 'hii Data'}

        fd = open('image.png', 'wb')
        fd.write(binary_data)
        fd.close()

        pil_image = Image.open('image.png').convert('RGB')

        predicted_class = model.predictWaste(pil_image)

        # logging.info(f"Predicted Class: {predicted_class}")
        return {"class": predicted_class}

    except Exception as error:
        print("HELPPP")
        # logging.exception(error)
        # e = sys.exc_info()[1]
        # raise HTTPException(status_code=500, detail=str(e))
        return {'class': 'There was an error proccessing your request, please try again'}
