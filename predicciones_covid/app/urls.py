from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('predecir/', views.predecir_imagen, name='predecir_imagen'), 
]