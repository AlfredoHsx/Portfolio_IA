document.getElementById('imageInput').addEventListener('change', (event) => {
    const file = event.target.files[0];
    const preview = document.getElementById('preview');

    if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
            preview.src = e.target.result;
        };

        reader.readAsDataURL(file); 
    } else {
        preview.src = ''; 
    }
});

document.getElementById('predictButton').addEventListener('click', () => {
    const imageInput = document.getElementById('imageInput');
    const resultElement = document.getElementById('result');

    // Obtiene el token CSRF
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;


    if (!imageInput.files[0]) {
        resultElement.innerText = "Por favor, sube una imagen.";
        return;
    }

    const formData = new FormData();
    formData.append('image', imageInput.files[0]);

    // Mostrar un indicador de carga o un mensaje "Procesando..."
    resultElement.innerText = "Procesando..."; 


     setTimeout(() => {
        // Realiza la petición fetch
        fetch('predecir/', { 
            method: 'POST',
            body: formData,
            headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRFToken': csrftoken  
        }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta del servidor');
            }
            return response.json(); 
        })
        .then(data => {
            resultElement.innerText = `Predicción: ${data.prediccion}`; 
        })
        .catch(error => {
            console.error('Error en la petición fetch:', error);
            resultElement.innerText = 'Error al procesar la imagen.';
        });
    }, 500); 
});