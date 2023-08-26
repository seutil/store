from django.shortcuts import render, HttpResponse

# Create your views here.

from articles.models import Article
from reviews.models import Review


def index(request):
    context = {
        "title": "Главная",
        "news": Article.objects.all(),
        "reviews": Review.objects.all(),
    }
    return render(
        request,
        "lawyer/index.html",
        context
    )
