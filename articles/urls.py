from django.urls import path
from articles.views import render_articles

app_name = 'articles'

urlpatterns = [
    path('page_articles/<int:page_number>', render_articles, name='index')
]