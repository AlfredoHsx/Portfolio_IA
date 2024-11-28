# Proyecto Predicciones COVID

Este proyecto utiliza Django para construir una aplicación que realiza predicciones relacionadas con el COVID-19. Sigue esta guía para instalar y ejecutar el proyecto en tu entorno local.

---

## Tabla de contenido

1. [Requisitos previos](#requisitos-previos)  
2. [Instalación](#instalación)  
3. [Cómo ejecutar el proyecto](#cómo-ejecutar-el-proyecto)  
4. [Aportar al proyecto](#sincronización-del-repositorio) 
5. [Notas importantes](#Notas-importantes) 

---

## Requisitos previos

Antes de comenzar, asegúrate de tener lo siguiente instalado en tu máquina:

- Python 3.9 o superior, recomendado Python 3.10.12  
- Pip (gestor de paquetes de Python)  
- Virtualenv (opcional, pero recomendado es lo que utilizamos en este proyecto)

---

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

1. **Clonar el repositorio**:  
   Clona este repositorio en tu máquina local y accede a la carpeta del proyecto:  
   ```bash
   git clone -b unidad_4 https://github.com/AlfredoHsx/Portfolio_IA.git
   cd predicciones_covid

2. **Crear o activar el entorno virtual**:  
    Crear el entorno virtual:
    ```bash
    virtualenv venv
    ```
    Activar el entorno virtual:
    ```bash
    source venv/bin/activate  # En macOS/Linux
    venv\Scripts\activate     # En Windows
    ```
3. **Instalar dependencias**:  
    Una vez activado el entorno virtual, instala las dependencias necesarias:
    ```bash
    pip install -r requirements.txt
    ```
---

## Cómo ejecutar el proyecto

0. **Creación del modelo .keras**:  
   El proyecto funciona haciendo predicciones de un modelo preentrenado. Para hacer modificaciones a este modelo deberás ingresar a la carpeta del `model/` dentro del proyecto `predicciones_covid` para editar y ejecutar el script `covid.ipynb` y que se genere una nueva versión.

1. **Asegúrate de estar en la carpeta raíz**:  
   Cambia al directorio raíz del proyecto si aún no estás en él:  
   ```bash
   cd predicciones_covid

2. **Aplicar las migraciones**:  
   Configura la base de datos aplicando las migraciones necesarias:
   ```bash
   python manage.py migrate
   
3. **Ejecutar el servidor de desarrollo**:  
    Inicia el servidor de desarrollo con el siguiente comando:
   ```bash
   python manage.py runserver
   
3. **Abrir la aplicación en el navegador**:  
    Una vez que el servidor esté en ejecución, accede a la URL que se indica en la terminal (por      defecto,[http://127.0.0.1:8000/](http://127.0.0.1:8000/)) para visualizar la aplicación.

   
## Aportar al proyecto
1. **Clona el repositorio (solo la primera vez)**:  
   Si aún no tienes el repositorio en tu máquina local, clónalo con el siguiente comando:  
   ```bash
   git clone -b nombre-rama https://github.com/AlfredoHsx/Portfolio_IA.git
   cd predicciones_covid
   
2. **Crea una nueva rama para tus cambios**:    
    Siempre crea una nueva rama para tus aportaciones, usando un nombre descriptivo.
    ```bash
    git branch nombre-rama
    git checkout nombre-rama 

3. **Agrega tus cambios al área de preparación (staging)**:     
    Después de realizar tus modificaciones, agrégalas para prepararlas antes del commit.
    ```bash
    git add . 
    
4. **Confirma tus cambios (commit)**:   
    Realiza un commit con un mensaje descriptivo que explique los cambios realizados.
   ```bash
   git commit -m "Descripción breve de los cambios"
   
5. **Sincroniza con la rama principal antes de subir tus cambios**:     
    Asegúrate de integrar los últimos cambios de la rama principal en tu rama local (En el ejemplo se llamam main, puede no llamarse así).
    ```bash
    git pull origin main
    
6. **Resuelve conflictos (si los hay)**:    
    Si aparecen conflictos durante el pull, resuélvelos manualmente y realiza un nuevo commit
    ```bash
    git commit -m "Conflictos resueltos"

7. **Sube tus cambios a la rama remota**:   
    Cuando tu rama esté lista y sincronizada, súbela al repositorio remoto.
    ```bash
    git push origin nombre-rama
    
8. **Crea un Pull Request (PR)**:     
    Ve al repositorio remoto y abre un Pull Request desde tu rama hacia la rama principal. Incluye una     descripción clara de tus cambios.
9. **Espera revisión y realiza ajustes si es necesario**:    
    Si los revisores solicitan cambios, actualiza tu rama y el Pull Request.
   
## Notas importantes
- **Siempre trabaja en una rama diferente a la principal** para mantener el repositorio limpio.  
- Antes de empezar nuevas tareas, actualiza la rama principal en tu máquina local:  
  ```bash
  git checkout main
  git pull origin main
