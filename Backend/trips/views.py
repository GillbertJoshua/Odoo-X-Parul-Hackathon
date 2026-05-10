from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Trip
from .serializers import TripSerializer

class TripViewSet(viewsets.ModelViewSet):
    serializer_class = TripSerializer
    permission_classes = [IsAuthenticated] # Must be logged in!

    def get_queryset(self):
        # Only return trips that belong to the currently logged-in user
        return Trip.objects.filter(user=self.request.user).order_by('start_date')

    def perform_create(self, serializer):
        # Automatically assign the logged-in user as the trip's owner
        serializer.save(user=self.request.user)