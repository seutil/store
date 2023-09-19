from django.db import models

# Create your models here.
class Service(models.Model):
    name = models.CharField(max_length=256)
    cost = models.IntegerField()
    additional_info = models.CharField(max_length=512)
    def __str__(self):
        return f'Название услуги: {self.name}'
    def formatted_cost(self):
        return "{:,.0f}".format(self.cost).replace(",", " ")