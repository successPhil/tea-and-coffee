from django.db import models

class Coffee(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    picture = models.FileField(upload_to="coffee/", blank=True, null=True)


    def __str__(self):
        return self.name

