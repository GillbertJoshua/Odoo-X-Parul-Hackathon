from rest_framework import viewsets, exceptions
from rest_framework.permissions import IsAuthenticated
from .models import Stop, Activity
from .serializers import StopSerializer, ActivitySerializer

class StopViewSet(viewsets.ModelViewSet):
    serializer_class = StopSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # SECURITY: Only return stops that belong to a trip owned by the logged-in user
        return Stop.objects.filter(trip__user=self.request.user)

    def perform_create(self, serializer):
        # SECURITY: Prevent a user from adding a stop to someone else's trip ID
        trip = serializer.validated_data['trip']
        if trip.user != self.request.user:
            raise exceptions.PermissionDenied("You cannot add a stop to a trip you do not own.")
        serializer.save()

class ActivityViewSet(viewsets.ModelViewSet):
    serializer_class = ActivitySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # SECURITY: Only return activities linked to the user's trips
        return Activity.objects.filter(stop__trip__user=self.request.user)

    def perform_create(self, serializer):
        # SECURITY: Prevent a user from adding an activity to someone else's stop
        stop = serializer.validated_data['stop']
        if stop.trip.user != self.request.user:
            raise exceptions.PermissionDenied("You cannot add an activity to a trip you do not own.")
        serializer.save()