from django.urls import path
from stocks.views import StockDataView

urlpatterns = [
    path('api/stock/<str:symbol>/', StockDataView.as_view(), name='stock_data'),
]