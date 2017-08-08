from django.shortcuts import render
from .models import *
from django.core import serializers
from django.http import HttpResponse
# Create your views here.
def lineChart(request):
    return render(request,'chart/line.html')


def barChart(request):
    return render(request,'chart/bar.html')

def ajax(request):
    student=Student.objects.all()
    data=serializers.serialize('json',student,fields=('student_name','maths_mark','physics_mark','grammer_mark'))
    return HttpResponse(data,content_type='application/json')