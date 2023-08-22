from django.shortcuts import render, HttpResponse

# Create your views here.

from articles.models import Article


def index(request):
    context = {
        "title": "Главная",
        "news": Article.objects.all()
    }
    return render(
        request,
        "lawyer/index.html",
        context
    )
