from django.urls import path

from coffee_reviews.views import CoffeeReview

urlpatterns = [
path('', CoffeeReview.as_view()),
]