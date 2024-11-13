import requests
from django.http import JsonResponse
from django.views import View
from django.conf import settings

class StockDataView(View):
    def get(self, request, symbol):
        api_key = settings.ALPHA_VANTAGE_API_KEY
        url = f'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol={symbol}&apikey={api_key}'
        response = requests.get(url)
        data = response.json()
        return JsonResponse(data)
