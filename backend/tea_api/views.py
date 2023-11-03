from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Tea
from .serializers import TeaSerializer
import requests

class TeaList(APIView):
    queryset = Tea.objects.all()
    serializer_class = TeaSerializer

    def get(self, request):
        # Fetch data from the API and update the database
        response = requests.get('https://boonakitea.cyclic.app/api/teas')
        data = response.json()
        return Response(data, status=status.HTTP_200_OK)
