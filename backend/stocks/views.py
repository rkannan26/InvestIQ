import requests
from django.http import JsonResponse
from django.views import View
from django.conf import settings

class StockDataView(View):
    def get(self, request, symbol):
        api_key = settings.ALPHA_VANTAGE_API_KEY
        url = f'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol={symbol}&apikey={api_key}'
        response = requests.get(url)
        if response.status_code == 200:
            data = response.json()
            return JsonResponse(data)
        else:
            return JsonResponse({'error': 'Failed to fetch data'}, status=400)
