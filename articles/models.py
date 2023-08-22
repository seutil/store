from django.db import models

class Article(models.Model):
    name = models.CharField(max_length=128)
    description = models.TextField(null=True, blank=True)
    date_create = models.DateField(auto_now=True)
    image = models.ImageField(upload_to='article_images')
    def __str__(self):
        return f"Название статьи: {self.name}"
    