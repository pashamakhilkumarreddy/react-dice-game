from django.urls import path
from .views import home_view, about_view, login_view, register_view

urlpatterns = [
    path('', home_view, name='home'),
    path('about', about_view, name='about'),
    path('login', login_view, name='login'),
    path('register', register_view, name='register'),
]