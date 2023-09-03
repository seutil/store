from django.db import models

# Create your models here.

class Review(models.Model):
    name = models.CharField(max_length=256)
    name_company = models.CharField(max_length=328)
    review = models.TextField(blank=True)
    rating = models.IntegerField()
    create_date = models.DateField(auto_now=True)
    is_publish = models.BooleanField(default=False)
    def __str__(self):
        return f"Имя отправителя: {self.name}"