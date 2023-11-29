from django.urls import path

from coffee_reviews.views import CoffeeReview, CoffeeLikes

urlpatterns = [
path('', CoffeeReview.as_view()),
path('all', CoffeeLikes.as_view()),
]