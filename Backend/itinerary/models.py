from django.db import models
from trips.models import Trip # Importing your Trip model!

class Stop(models.Model):
    # Links this city stop directly to a specific trip
    trip = models.ForeignKey(Trip, on_delete=models.CASCADE, related_name='stops')
    
    city_name = models.CharField(max_length=100)
    arrival_date = models.DateField()
    departure_date = models.DateField()
    order_index = models.PositiveIntegerField(default=0) # Helps the frontend sort the cities

    class Meta:
        ordering = ['arrival_date', 'order_index']

    def __str__(self):
        return f"{self.city_name} ({self.trip.name})"

class Activity(models.Model):
    # Links this activity directly to a specific city stop
    stop = models.ForeignKey(Stop, on_delete=models.CASCADE, related_name='activities')
    
    name = models.CharField(max_length=200)
    activity_type = models.CharField(max_length=50) # e.g., Sightseeing, Food, Flight
    cost = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    duration = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return self.name