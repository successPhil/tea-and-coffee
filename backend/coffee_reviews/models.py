from django.db import models
from django.contrib.auth.models import User

class Review(models.Model):
    coffee = models.ForeignKey('coffee_api.Coffee', on_delete=models.CASCADE, related_name='reviews')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    rating = models.PositiveIntegerField()
    liked_by = models.ManyToManyField(User, related_name='liked_reviews', blank=True)

    def __str__(self):
        return f"{self.user.username}'s review for {self.coffee.name}"