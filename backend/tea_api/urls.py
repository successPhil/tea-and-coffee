from django.urls import path
from . import views

urlpatterns = [
    path('black-tea', views.BlackTeas.as_view(), name='black-tea-list'),
    path('white-tea', views.WhiteTeas.as_view(), name='white-tea-list'),
    path('earlgrey-tea', views.EarlGreyTeas.as_view(), name='earl-grey-tea-list'),
    path('woolong-tea', views.WoolongTeas.as_view(), name='woolong-tea-list'),
    path('green-tea', views.GreenTeas.as_view(), name='tea-categories'),
    path('all-teas', views.AllTeas.as_view(), name='tea-categories'),
]