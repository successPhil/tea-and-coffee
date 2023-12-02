from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Coffee
from .serializers import CoffeeSerializer
from coffee_reviews.serializers import ReviewSerializer

class CoffeeListView(APIView):
    def get(self, request):
        coffees = Coffee.objects.order_by('pk')
        serializer = CoffeeSerializer(coffees, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        coffee = request.data
        serializer = CoffeeSerializer(data=coffee)
        if serializer.is_valid(raise_exception=True):
            coffee_saved = serializer.save()
        return Response({"result": f"{coffee_saved.name} saved"})