from rest_framework.generics import CreateAPIView
from django.contrib.auth.models import User
from .serializers import SignupSerializer
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .user_serializers import UserSerializer
from .models import Users

class SignupView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = SignupSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        print('Sign-up being called')
        if serializer.is_valid():
            username = serializer.validated_data["username"]
            password = serializer.validated_data["password"]
            user = User.objects.create_user(username=username, password=password)
            users_obj = Users.objects.create(user=user)
            print(users_obj, 'THIS IS USERS OBJECT')
            users_serializer = UserSerializer(users_obj)
            return Response({
            'user_id': user.id,
            'users': users_serializer.data,
        }, status=status.HTTP_201_CREATED)


class FavoriteCoffee(APIView):
    def get(self, request):
        try:
            user = request.user
            print(user, 'THIS IS WHAT USER IS')
            if Users.objects.filter(user__username=user.username).exists():
                app_user = Users.objects.get(user=user)
                print(app_user, 'THIS IS APP USER')
                serializer = UserSerializer(app_user)
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                print("didn't find user")
                return Response({"message": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            print(f"An error occurred: {str(e)}")
            return Response({"message": "Internal Server Error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request):
        coffee_id = request.data.get('coffee_id')  # Assuming the coffee_id is sent in the request data
        user = request.user

        try:
            app_user = Users.objects.get(user=user)
            if app_user.add_favorite(coffee_id):
                return Response({"message": "Coffee added to favorites"}, status=status.HTTP_201_CREATED)
            else:
                return Response({"message": "Coffee is already in favorites"}, status=status.HTTP_400_BAD_REQUEST)

        except Users.DoesNotExist:
            return Response({"message": "User not found"}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request):
        coffee_id = request.data.get('coffee_id')  # Assuming the favorite_id is sent in the request data
        user = request.user
        print(coffee_id, 'THIS IS FAV coffee ID')

        try:
            app_user = Users.objects.get(user=user)
            print(app_user, 'APP USER IN DELETE')
            if app_user.remove_favorite(coffee_id):
                return Response({"message": "Coffee removed from favorites"}, status=status.HTTP_204_NO_CONTENT)
            else:
                return Response({"message": "Favorite not found"}, status=status.HTTP_400_BAD_REQUEST)

        except Users.DoesNotExist:
            return Response({"message": "User not found"}, status=status.HTTP_404_NOT_FOUND)