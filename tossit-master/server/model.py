
from tensorflow.keras.preprocessing import image
import numpy as np
from tensorflow.keras.models import Model
from tensorflow.keras import layers, models
from tensorflow.keras.callbacks import ModelCheckpoint, EarlyStopping
import os


img_path = "/content/drive/MyDrive/Data/Test/R/R_14859.jpg"

print(os.listdir())


class wasteClassification:

    def __init__(self):
        self.trained_model = models.load_model('./model.h5')
        self.trained_model.compile(optimizer='adam',
                                   loss='categorical_crossentropy',
                                   metrics=['accuracy'])

    def load_image(self, img, show=False):

       # img = image.load_img(img_path, target_size=(224, 224))
        img = img.resize((224, 224))
        # (height, width, channels)
        img_tensor = image.img_to_array(img)
        # (1, height, width, channels), add a dimension because the model expects this shape: (batch_size, height, width, channels)
        img_tensor = np.expand_dims(img_tensor, axis=0)
        img_tensor /= 255.

        return img_tensor

    def predictWaste(self, image_loaded):
        classes = ['Recycling', "Organic", "Garbage"]
        image_loaded = self.load_image(image_loaded)
        preds = self.trained_model.predict(image_loaded)

        MaxPosition = np.argmax(preds)
        prediction_label = classes[MaxPosition]

        return prediction_label
