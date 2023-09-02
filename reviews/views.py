from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from reviews.models import Review
import json

@csrf_exempt
def create_review(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        
        # Теперь у вас есть доступ к данным в переменной data
        name = data.get('name')
        company_name = data.get('company_name')
        review = data.get('review')
        mark = data.get('mark')
        
        # Здесь вы можете обработать данные и сохранить их в базе данных
        review = Review(name=name, name_company=company_name, review=review, rating=mark)
        review.save()
        
        response_data = {'message': 'Отзыв успешно создан'}
        return JsonResponse(response_data, status=200)
    else:
        response_data = {'message': 'Метод не поддерживается'}
        return JsonResponse(response_data, status=405)