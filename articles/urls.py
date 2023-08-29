from django.urls import path
from articles.views import render_articles

app_name = 'articles'

urlpatterns = [
    path('', render_articles, name='index')
]