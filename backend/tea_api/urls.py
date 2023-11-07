from django.urls import path
from . import views

urlpatterns = [
    path('teas', views.TeaList.as_view(), name='tea-list'),
    path('tea-categories', views.TeaCategory.as_view(), name='tea-categories'),
]