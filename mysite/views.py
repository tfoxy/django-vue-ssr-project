import os
from django.shortcuts import render
from react.render import render_component


def home(request):
    filepath = os.path.join(os.path.dirname(__file__), 'ssr-build', 'home.js')
    content = render_component(filepath, {'foo': 'bar'})
    return render(request, 'home.html', {'content': content})
