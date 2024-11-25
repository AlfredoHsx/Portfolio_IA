let model;

// Cargar el modelo TensorFlow.js
(async () => {
    model = await tf.loadLayersModel('model.json');
    console.log("Modelo cargado");
})();

// Procesar la imagen y hacer una predicción
document.getElementById('predictButton').addEventListener('click', async () => {
    const imageInput = document.getElementById('imageInput');
    const resultElement = document.getElementById('result');

    if (!imageInput.files[0]) {
        resultElement.innerText = "Por favor, sube una imagen.";
        return;
    }

    // Leer la imagen
    const file = imageInput.files[0];
    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = async () => {
        // Preprocesar la imagen
        const tensor = tf.browser.fromPixels(img)
            .resizeNearestNeighbor([224, 224]) // Ajusta al tamaño esperado
            .toFloat()
            .div(tf.scalar(255.0)) // Normalizar
            .expandDims();

        // Hacer la predicción
        const prediction = await model.predict(tensor).data();
        const result = prediction[0] > 0.5 ? "Al parecer tienes COVID :(" : "Estas limpio!";

        // Mostrar resultado
        resultElement.innerText = `Resultado: ${result}`;
    };
});
