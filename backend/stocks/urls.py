from django.urls import path
from .views import StockDataView

urlpatterns = [
    path('stock/<str:symbol>/', StockDataView.as_view(), name='stock-data'),
]
