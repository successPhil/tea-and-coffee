from django.db import models

from django.db import models

class Tea(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
