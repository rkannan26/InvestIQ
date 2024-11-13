from django.http import JsonResponse
import requests
from django.conf import settings

def get_stock_data(request, symbol):
    api_key = settings.FMP_API_KEY
    print(api_key)  # This will print to your console where Django is running
    url = f'https://financialmodelingprep.com/api/v3/quote/{symbol}?apikey={api_key}'
    
    try:
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        
        if data:
            stock_data = data[0]  # FMP returns a list with one item
            return JsonResponse(stock_data)
        else:
            return JsonResponse({'error': 'No data found for the given symbol'}, status=404)
    
    except requests.exceptions.RequestException as e:
        print(f"Error fetching stock data: {str(e)}")  # This will also print to your console
        return JsonResponse({'error': f'Error fetching stock data: {str(e)}'}, status=500)

# You can add more view functions here as needed