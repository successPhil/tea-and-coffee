from django.db import models
from django.contrib.auth.models import User

class Like(models.Model):
    review = models.ForeignKey('coffee_reviews.Review', on_delete=models.CASCADE, related_name='likes')
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user.username} likes {self.review}"


class Review(models.Model):
    coffee = models.ForeignKey('coffee_api.Coffee', on_delete=models.CASCADE, related_name='reviews')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    rating = models.PositiveIntegerField()
    liked_by = models.ManyToManyField(User, related_name='liked_reviews', blank=True)

    def __str__(self):
        return f"{self.user.username}'s review for {self.coffee.name}"
    
    def like_review(self, user):
    # Check if the user has already liked the review
        print('TRYING TO LIKE REVIEW')
        if not self.liked_by.filter(user=user).exists():
            # User hasn't liked the review, add the like
            Like.objects.create(review=self, user=user)
            return True
        else:
            # User has already liked the review, remove the like
            self.liked_by.filter(user=user).delete()
            return False
