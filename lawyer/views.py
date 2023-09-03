from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from lawyer.models import Problem, File
from django.views.decorators.csrf import csrf_exempt
from articles.models import Article
from reviews.models import Review

import logging

logger = logging.getLogger(__name__)


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

@csrf_exempt
def create_problem(request):
    if request.method == 'POST':
        # Получите данные из FormData
        name = request.POST.get('name')
        email = request.POST.get('email')
        description = request.POST.get('description')
        
        # Создайте экземпляр модели Problem
        problem_instance = Problem(name=name, email=email, description=description)

        problem_instance.save()
        # Получите загруженные файлы
        files = request.FILES.getlist('file_upload')
        
        logging.info(f'============================================{files}')
        # Для каждого файла создайте экземпляр модели File и свяжите его с Problem
        for uploaded_file in files:
            file_instance = File(name=uploaded_file.name, file=uploaded_file)
            file_instance.save()
            problem_instance.files.add(file_instance)

        # Возвращаем JSON-ответ, чтобы сообщить клиенту, что запрос был успешно обработан
        return JsonResponse({'message': 'все ок'})
    else:
        # Возвращаем ошибку, если запрос не был POST
        return JsonResponse({'error': 'Метод запроса должен быть POST'}, status=400)
