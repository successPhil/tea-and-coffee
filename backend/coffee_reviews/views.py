from rest_framework.views import APIView
from rest_framework.response import Response
from coffee_api.models import Coffee
from coffee_api.serializers import CoffeeSerializer

class CoffeeReview(APIView):
    def post(self, request):
        review_data = request.data  # Assuming the data contains the necessary fields for a review
        user = request.user
        print(user, 'CHECKING USER')
        print(review_data, 'THIS IS REVIEW DATA')
        coffee_id = review_data.get('coffee_id')  # Assuming there's a field in the data to identify the coffee

        try:
            coffee = Coffee.objects.get(pk=coffee_id)
            print(coffee, 'DOES COFFEE EXIST')
        except Coffee.DoesNotExist:
            return Response({"error": "Coffee not found"}, status=404)

        # Assuming your review_data contains 'username', 'text', and 'rating'
        username = request.user
        text = review_data.get('text')
        rating = review_data.get('rating')

        # Add the review to the coffee using the add_review method
        coffee.add_review(username=username, text=text, rating=rating)
        # Serialize the updated coffee object
        serializer = CoffeeSerializer(coffee)
        
        return Response(serializer.data)
