from django.shortcuts import render,redirect
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login, logout
from django.contrib.auth.forms import UserCreationForm
# Create your views here.



def login_user(request):
    if request.method == "POST":
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect("/home")
    else:
        form = AuthenticationForm()
    return render(request, "login.html", {"form": form})



def home(request):
    return render(request,"home.html")

def register(request):
    form = UserCreationForm()
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            usr = form.save()
            return redirect("/home")
    return render(request, "register.html",{"form":form})


def logout_view(request):
    logout(request)
    return redirect("/")