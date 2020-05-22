from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate
from django.http import HttpResponse

# Create your views here.
def register_view(request):
    if request.method == 'POST':
        email = request.POST.get('email', None)
        password = request.POST.get('password', None)
        if email and password:
            return redirect('home')
        else:
            return HttpResponse('Unable to create a new user', status = 403)
    elif request.method == 'GET':
        return render(request, 'users/auth/register.html')

def login_view(request, *args, **kwargs):
    if request.method == 'POST':
        email = request.POST.get('email', None)
        password = request.POST.get('password', None)
        if email and password:
            return HttpResponse('Successfully signed up!!!', status = 200)
        else:
            return HttpResponse('Unable to create a new user', status = 403)
    elif request.method == 'GET':
        # form = UserCreationForm()
        return render(request, 'users/auth/login.html')

