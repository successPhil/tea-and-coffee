from django.db import models

class Tea(models.Model):
    _id = models.CharField(max_length=50)
    name = models.CharField(max_length=100)
    slug = models.TextField()
    altnames = models.TextField()
    origin = models.TextField()
    caffeine = models.CharField()
    caffeineLevel = models.TextField()
    description = models.CharField()
    colorDescription = models.CharField()
    tasteDescription = models.CharField()
