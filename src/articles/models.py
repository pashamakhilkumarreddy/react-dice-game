from django.db import models

# Create your models here.
class Article(models.Model):
    title = models.TextField()
    author = models.CharField(max_length=255, default= 'Stacy')
    description = models.TextField()
    price = models.DecimalField(max_digits = 10, decimal_places=0)