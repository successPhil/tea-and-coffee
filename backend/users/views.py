from rest_framework.generics import CreateAPIView
from django.contrib.auth.models import User
from .serializers import SignupSerializer
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status


class SignupView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = SignupSerializer()
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
            if serializer.is_valid():
                username = serializer.validated_data["username"]
                password = serializer.validated_data["password"]
                User.objects.get(username=username, password=password)
           