from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from lawyer.models import Problem, File
from django.views.decorators.csrf import csrf_exempt
from articles.models import Article
from reviews.models import Review
from django.core.mail import send_mail
from django.http import JsonResponse
import json
from django.conf import settings
from django.core.mail import EmailMessage

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
        # Для каждого файла создайте экземпляр модели File и свяжите его с Problem
        for uploaded_file in files:
            file_instance = File(name=uploaded_file.name, file=uploaded_file)
            file_instance.save()
            problem_instance.files.add(file_instance)

        # Возвращаем JSON-ответ, чтобы сообщить клиенту, что запрос был успешно обработан
        return JsonResponse({'status': '200'})
    else:
        # Возвращаем ошибку, если запрос не был POST
        return JsonResponse({'error': 'Метод запроса должен быть POST'}, status=400)

@csrf_exempt
def send_mail_order_call(request):
    data = json.loads(request.body)
    subject = 'Order call'
    message = f"Александр, Вы получили заказ на звонок от {data.get('name')}, номер телефона: {data.get('phone')}"
    from_email = settings.EMAIL_HOST_USER  # Используем адрес из настроек
    recipient_list = [settings.EMAIL_HOST_USER]
    reply_to = [data.get('email')]  # Используем адрес из формы как "Reply-To" адрес

    email = EmailMessage(subject, message, from_email, recipient_list, reply_to=reply_to)
    email.send()

    response_data = {'message': 'Заказ на звонок успешно отправлен'}
    return JsonResponse(response_data, status=200)