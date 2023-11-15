from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Tea
from .serializers import TeaSerializer
import requests
from rest_framework.response import Response
from rest_framework import status



class BlackTeas(APIView):
    
    def get(self, request):
        
        response = requests.get('https://boonakitea.cyclic.app/api/teas')
        data = response.json()
        # teasList = []

        # for entry in data:
        #     if 'slug' in entry and entry['slug'] == 'black':
        #         teasList.append(entry['slug'])

        # tea_data = {}

        # for tea_slug in teasList:
        #     tea_response = requests.get(f'https://boonakitea.cyclic.app/api/teas/{tea_slug}')
        #     if tea_response.status_code == 200:
        #         tea_data[tea_slug] = tea_response.json()

        return Response(data[0], status=status.HTTP_200_OK)
    

class WhiteTeas(APIView):
    
    def get(self, request):
        
        response = requests.get('https://boonakitea.cyclic.app/api/teas')
        data = response.json()
        # teasList = []

        # for entry in data:
        #     if 'slug' in entry and entry['slug'] == 'white':
        #         teasList.append(entry['slug'])

        # tea_data = {}

        # for tea_slug in teasList:
        #     tea_response = requests.get(f'https://boonakitea.cyclic.app/api/teas/{tea_slug}')
        #     if tea_response.status_code == 200:
        #         tea_data[tea_slug] = tea_response.json()

        return Response(data[1], status=status.HTTP_200_OK)
    


class EarlGreyTeas(APIView):
    
    def get(self, request):
        
        response = requests.get('https://boonakitea.cyclic.app/api/teas')
        data = response.json()
        # teasList = []

        # for entry in data:
        #     if 'slug' in entry:
        #             teasList.append(entry['slug'])
        #     if 'types' in entry['slug']:
        #         for tea_type in entry['types']:
        #             if 'slug' in entry['types'][tea_type]:
        #                 teasList.append(entry['types'])

        # tea_data = {}

        # for tea_slug in teasList:
        #     tea_response = requests.get(f'https://boonakitea.cyclic.app/api/teas/{tea_slug}')
        #     if tea_response.status_code == 200:
        #         tea_data[tea_slug] = tea_response.json()

        return Response(data[2], status=status.HTTP_200_OK)
    


class WoolongTeas(APIView):
    
    def get(self, request):
        
        response = requests.get('https://boonakitea.cyclic.app/api/teas')
        data = response.json()
        # teasList = []

        # for entry in data:
        #     if 'slug' in entry and entry['slug'] == 'oolong':
        #         teasList.append(entry['slug'])

        # tea_data = {}

        # for tea_slug in teasList:
        #     tea_response = requests.get(f'https://boonakitea.cyclic.app/api/teas/{tea_slug}')
        #     if tea_response.status_code == 200:
        #         tea_data[tea_slug] = tea_response.json()

        return Response(data[4], status=status.HTTP_200_OK)
    



class GreenTeas(APIView):
    
    def get(self, request):
        
        response = requests.get('https://boonakitea.cyclic.app/api/teas')
        data = response.json()
        # teasList = []

        # for entry in data:
        #     if 'slug' in entry and entry['slug'] == 'green':
        #         teasList.append(entry['slug'])

        # tea_data = {}

        # for tea_slug in teasList:
        #     tea_response = requests.get(f'https://boonakitea.cyclic.app/api/teas/{tea_slug}')
        #     if tea_response.status_code == 200:
        #         tea_data[tea_slug] = tea_response.json()

        return Response(data[5], status=status.HTTP_200_OK)



class AllTeas(APIView):
    
    def get(self, request):
        response = requests.get('https://boonakitea.cyclic.app/api/teas')
        data = response.json()

        return Response(data, status=status.HTTP_200_OK)