from django.shortcuts import render

def main(request):
    return render(request, 'chat/main.html')