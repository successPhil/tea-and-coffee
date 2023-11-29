from django.db import models
from django.db.models import Avg
from django.contrib.auth.models import User
from coffee_reviews.models import Review

class Coffee(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    picture = models.FileField(upload_to="coffee/", blank=True, null=True)
    caffeine = models.PositiveIntegerField(default=0)
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=3.00)



    def __str__(self):
        return self.name
    
    def add_review(self, username, text, rating):
        # Create a new Review instance and associate it with the Coffee
        print(username, 'USERNAME IN ADD REVIEW METHOD')
        review = Review.objects.create(coffee=self, user=User.objects.get(username=username), text=text, rating=rating)

        # Update the average rating of the Coffee based on all reviews
        avg_rating = self.reviews.aggregate(Avg('rating'))['rating__avg']
        if avg_rating is not None:
            self.rating = round(avg_rating, 2)
            self.save()

    

    @property
    def reviews(self):
        return self.review_set.all()  # Use the related_name 'reviews' defined in the Review model