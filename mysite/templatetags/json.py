import json
from django import template
from django.core.serializers.json import DjangoJSONEncoder
from django.utils.encoding import force_text
from django.utils.functional import Promise
from django.utils.html import escape
from django.utils.safestring import mark_safe


register = template.Library()


class LazyEncoder(DjangoJSONEncoder):
    def default(self, obj):
        if isinstance(obj, Promise):
            return force_text(obj)
        return super(LazyEncoder, self).default(obj)


def json_filter(data):
    """
    Safely JSON-encode an object.
    To protect against XSS attacks, HTML special characters (<, >, &) and unicode newlines
    are replaced by escaped unicode characters. Django does not escape these characters
    by default.
    Output of this method is not marked as HTML safe. If you use it inside an HTML
    attribute, it must be escaped like regular data:
    <div data-user="{{ data|json }}">
    If you use it inside a <script> tag, then the output does not need to be escaped,
    so you can mark it as safe:
    <script>
    var user = {{ data|json|safe }};
    </script>
    Escaped characters taken from Rails json_escape() helper:
    https://github.com/rails/rails/blob/v4.2.5/activesupport/
    lib/active_support/core_ext/string/output_safety.rb#L60-L113
    """
    unsafe_chars = {
        '&': '\\u0026',
        '<': '\\u003c',
        '>': '\\u003e',
        '\u2028': '\\u2028',
        '\u2029': '\\u2029',
    }
    json_str = json.dumps(data, cls=LazyEncoder)

    for (c, d) in unsafe_chars.items():
        json_str = json_str.replace(c, d)

    return json_str


@register.filter
def attrjson(data):
    return escape(json_filter(data))


@register.filter
def scriptjson(data):
    return mark_safe(json_filter(data))
