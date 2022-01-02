from django.urls import path

from .views import login_user,register,logout_view,home


urlpatterns = [
    path("", login_user),
    path("logout/", logout_view),
    path("register/", register),
    path("home/", home),
]