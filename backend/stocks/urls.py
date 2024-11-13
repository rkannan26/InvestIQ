from django.urls import path
from . import views

urlpatterns = [
    path('api/stock/<str:symbol>/', views.get_stock_data, name='stock_data'),
]