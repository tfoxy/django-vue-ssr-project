import os
from django.shortcuts import render
from react.render import render_component


def home(request):
    filepath = os.path.join(os.path.dirname(__file__), 'ssr-build', 'home.js')
    js_context = {'foobar': 'baz'}
    content = render_component(filepath, js_context)
    return render(request, 'home.html', {
        'content': content,
        'js_context': js_context,
    })
