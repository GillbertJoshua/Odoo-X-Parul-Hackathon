from rest_framework import viewsets, exceptions
from rest_framework.permissions import IsAuthenticated
from .models import Note
from .serializers import NoteSerializer

class NoteViewSet(viewsets.ModelViewSet):
    serializer_class = NoteSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # SECURITY: Only return notes for the logged-in user's trips
        return Note.objects.filter(trip__user=self.request.user).order_by('-updated_at')

    def perform_create(self, serializer):
        # SECURITY: Ensure they own the trip before adding a journal entry
        trip = serializer.validated_data['trip']
        if trip.user != self.request.user:
            raise exceptions.PermissionDenied("You cannot add notes to a trip you do not own.")
        serializer.save()