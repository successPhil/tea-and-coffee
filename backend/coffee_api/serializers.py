from rest_framework import serializers
from .models import Coffee

class CoffeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coffee
        fields = ['name', 'description', 'picture']

    def create(self, validated_data):
        # Custom validation logic goes here
        # For example, you can add additional checks on the data

        # Call the default create method to actually create the object
        coffee = Coffee.objects.create(**validated_data)

        return coffee
