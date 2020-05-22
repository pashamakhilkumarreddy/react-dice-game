from django.shortcuts import render
from django.http import HttpResponse
from .models import Posts

# Create your views here.
def home_view(request, *args, **kwargs):
  posts = Posts.objects.all()
  return render(request, 'blog/index.html', {
    'posts': posts
  })

def about_view(request, *args, **kwargs):
  return render(request, 'blog/about.html')
