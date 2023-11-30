from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    path('bookings/', views.booking_list),
]

urlpatterns = format_suffix_patterns(urlpatterns)