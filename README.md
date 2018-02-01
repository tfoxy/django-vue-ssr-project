# django-vue-ssr-project

Django project using Vue server side rendering


## Installation

The system must have installed:

* python 3
* virtualenv
* node 8

```sh
virtualenv -p python3 venv
. venv/bin/activate
pip install -r requirements.txt
npm install
python manage.py migrate
npm run build
```


## Usage

```sh
python manage.py runserver
node render_server.js
# xdg-open http://localhost:8000
```
