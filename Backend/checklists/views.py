from rest_framework import viewsets, exceptions
from rest_framework.permissions import IsAuthenticated
from .models import ChecklistItem
from .serializers import ChecklistItemSerializer

class ChecklistItemViewSet(viewsets.ModelViewSet):
    serializer_class = ChecklistItemSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # SECURITY: Only return checklist items for the user's trips
        return ChecklistItem.objects.filter(trip__user=self.request.user)

    def perform_create(self, serializer):
        # SECURITY: Ensure they own the trip before adding an item
        trip = serializer.validated_data['trip']
        if trip.user != self.request.user:
            raise exceptions.PermissionDenied("You cannot add items to a trip you do not own.")
        serializer.save()