from django.conf.urls import url
from . import views


app_name="chart"

urlpatterns=[
    url(r'^$',views.lineChart,name="line"),
    url(r'^ajax/$',views.ajax,name="ajax"),

    url(r'^bar/$',views.barChart,name="pie"),
    url(r'^ajax/$',views.ajax,name="ajax"),
]
