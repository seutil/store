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
    
class Lawyer(models.Model):
    name = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    phone = models.CharField(max_length=12)
    address = models.CharField(max_length=512, null=True, blank=True)
    image = models.ImageField(upload_to='avatar_lawyer', null=True, blank=True)
    def __str__(self):
        return f"{self.name}"