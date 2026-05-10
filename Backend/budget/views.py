from rest_framework import viewsets, exceptions
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.db.models import Sum
from .models import Expense
from .serializers import ExpenseSerializer
from trips.models import Trip

class ExpenseViewSet(viewsets.ModelViewSet):
    serializer_class = ExpenseSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # SECURITY: Only see expenses for your own trips
        return Expense.objects.filter(trip__user=self.request.user)

    def perform_create(self, serializer):
        # SECURITY: Ensure the user owns the trip before adding an expense
        trip = serializer.validated_data['trip']
        if trip.user != self.request.user:
            raise exceptions.PermissionDenied("You cannot add an expense to a trip you do not own.")
        serializer.save()

    # THE MATH MAGIC: A custom endpoint for frontend charts
    @action(detail=False, methods=['get'])
    def summary(self, request):
        trip_id = request.query_params.get('trip_id')
        if not trip_id:
            return Response({"error": "Please provide a trip_id in the URL parameters"}, status=400)
        
        # Verify ownership before calculating
        try:
            trip = Trip.objects.get(id=trip_id, user=request.user)
        except Trip.DoesNotExist:
            return Response({"error": "Trip not found."}, status=404)

        # Get all expenses for this specific trip
        expenses = Expense.objects.filter(trip=trip)
        
        # Calculate the grand total (returns 0 if there are no expenses yet)
        total = expenses.aggregate(Sum('amount'))['amount__sum'] or 0
        
        # Group the costs by category (e.g., {"category": "Stay", "total": 450.00})
        breakdown = expenses.values('category').annotate(total=Sum('amount'))

        return Response({
            "trip_id": trip.id,
            "total_budget": total,
            "breakdown": breakdown
        })