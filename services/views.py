from django.shortcuts import render
from services.models import Service
# Create your views here.

def render_services(request):
    context = {
        'services': Service.objects.all()
    }
    return render(
        request,
        "services/service.html",
        context
    )