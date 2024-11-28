from django.shortcuts import render
from django.http import JsonResponse
import tensorflow as tf
from PIL import Image
import numpy as np
import io

model = tf.keras.models.load_model('model/modelo.keras')

def index(request):
    return render(request, 'app/index.html')

def predecir_imagen(request):
    is_ajax = request.headers.get('X-Requested-With') == 'XMLHttpRequest'
    if request.method == 'POST' and request.FILES['image'] and is_ajax:
        

        # Obtiene la imagen 
        image = request.FILES['image'].read()
        image = Image.open(io.BytesIO(image)).convert('L')
        image = image.resize((150, 150))
        image = np.array(image) / 255.0
        image = np.expand_dims(image, axis=0)
        image = np.expand_dims(image, axis=-1)

        # Realiza la predicción
        prediction = model.predict(image)
        probabilities = prediction[0]
        predicted_class = np.argmax(probabilities)

        # Genera el resultado
        resultado_prediccion = 'COVID-19' if predicted_class == 1 else 'Normal'

        # Devuelve la predicción como JSON
        return JsonResponse({'prediccion': resultado_prediccion})

    return JsonResponse({'error': 'Solicitud no válida'}, status=400)