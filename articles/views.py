from django.shortcuts import render, HttpResponse
from articles.models import Article
from django.core.paginator import Paginator

# Create your views here.

def render_articles(request, page_number=1):
    articles = Article.objects.all()
    per_page = 6
    paginator = Paginator(articles, per_page)
    articles_pagintor = paginator.page(page_number)
    context = {
        'news': articles_pagintor
    }
    return render(request, 'articles/articles.html', context)