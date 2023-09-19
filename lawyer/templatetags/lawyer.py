from django import template
from lawyer.models import Lawyer

register = template.Library()

@register.inclusion_tag('templatetags/callback.html')
def lawyer():
    lawyer = Lawyer.objects.first()
    return {'lawyer': lawyer}
