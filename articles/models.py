from django.db import models
from tinymce import models as tinymce_models

class Article(models.Model):
    name = models.CharField(max_length=128)
    short_description = models.TextField(null=True, blank=True)
    description = tinymce_models.HTMLField()
    date_create = models.DateField(auto_now=True)
    image = models.ImageField(upload_to='article_images')
    def __str__(self):
        return f"Название статьи: {self.name}"
    