from django.urls import path
from . import views

urlpatterns = [
    path('teas', views.TeaList.as_view(), name='tea-list'),
]