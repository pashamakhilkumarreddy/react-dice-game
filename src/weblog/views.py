from django.shortcuts import render
from django.http import HttpResponse

posts = [
  {
    'author': 'Stacy',
    'title': 'Blog Post 1',
    'content': 'First Post',
    'date_posted': 'August 27, 2018'
  },
  {
    'author': 'John Doe',
    'title': 'Blog Post 2',
    'content': 'First Post',
    'date_posted': 'August 27, 2019'
  },
  {
    'author': 'Stacy',
    'title': 'Blog Post 3',
    'content': 'First Post',
    'date_posted': 'August 27, 2020'
  }
]

# Create your views here.
def home_view(request, *args, **kwargs):
  return render(request, 'blog/index.html', {
    'posts': posts
  })

def about_view(request, *args, **kwargs):
  return render(request, 'blog/about.html')