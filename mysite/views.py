from django.shortcuts import render
from vue import render as vue_render


def home(request):
    content = vue_render('home')
    return render(request, 'home.html', {
        'content': content,
    })
