from django.urls import path
from reviews.views import create_review

app_name = 'reviews'

urlpatterns = [
    path('create', create_review, name='index')
]