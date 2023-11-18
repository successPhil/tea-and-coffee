from rest_framework import serializers
from django.contrib.auth.models import User  # Assuming User model is used for the 'user' field in Review
from .models import Review

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username']

class ReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)  # Nested serializer for 'user' field
    liked_by = UserSerializer(many=True, read_only=True)  # Nested serializer for 'liked_by' field

    class Meta:
        model = Review
        fields = ['user', 'text', 'rating', 'liked_by']

    def create(self, validated_data):
        # Custom validation logic goes here
        # For example, you can add additional checks on the data

        # Call the default create method to actually create the object
        review = Review.objects.create(**validated_data)

        return review
