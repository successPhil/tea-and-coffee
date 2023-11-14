from django.urls import path

from coffee_api.views import CoffeeListView

urlpatterns = [

path('', CoffeeListView.as_view()),

]