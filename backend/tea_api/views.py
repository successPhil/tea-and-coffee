from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Tea
from .serializers import TeaSerializer
import requests
from rest_framework.response import Response
from rest_framework import status



class TeaList(APIView):
    queryset = Tea.objects.all()
    serializer_class = TeaSerializer

    def get(self, request):
        
        response = requests.get('https://boonakitea.cyclic.app/api/teas')
        data = response.json()

        teasList = []

        for entry in data:
            if 'slug' in entry:
                teasList.append(entry['slug'])
            if 'types' in entry:
                for tea_type in entry['types']:
                    if 'slug' in entry['types'][tea_type]:
                        teasList.append(entry['types'][tea_type]['slug'])

        tea_data = {}

        for tea_slug in teasList:
            tea_response = requests.get(f'https://boonakitea.cyclic.app/api/teas/{tea_slug}')
            if tea_response.status_code == 200:
                tea_data[tea_slug] = tea_response.json()

        return Response(tea_data, status=status.HTTP_200_OK)


class TeaCategory(APIView):
    
    def get(self, request):
        response = requests.get('https://boonakitea.cyclic.app/api/teas')
        data = response.json()
        
        for slug in data:
            if slug:
              print(slug.slug)