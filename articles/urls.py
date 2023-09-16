from django.urls import path
from articles.views import render_articles
from articles.views import article

app_name = 'articles'

urlpatterns = [
    path('page_articles/<int:page_number>', render_articles, name='index'),
    path('article/<int:article_id>', article, name='article')
]