from django.shortcuts import render, HttpResponse

# Create your views here.

def render_articles(request):
    return render(request, 'articles/article.html', {'title': 'test template'})