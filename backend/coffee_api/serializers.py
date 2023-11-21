from rest_framework import serializers
from .models import Coffee
from coffee_reviews.serializers import ReviewSerializer

class CoffeeSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)
    class Meta:
        model = Coffee
        fields = '__all__'

    def create(self, validated_data):
        # Custom validation logic goes here
        # For example, you can add additional checks on the data

        # Call the default create method to actually create the object
        coffee = Coffee.objects.create(**validated_data)

        return coffee
