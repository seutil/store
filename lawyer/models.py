from django.db import models


class File(models.Model):
    name = models.CharField(max_length=256)
    file = models.FileField(upload_to='problems_docs')
    def __str__(self):
        return f'Название документа: {self.name}'

class Problem(models.Model):
    name = models.CharField(max_length=256)
    email = models.EmailField(max_length=254)
    description = models.TextField()
    files = models.ManyToManyField(File)
    def __str__(self):
        return f'Название проблемы: {self.name}'