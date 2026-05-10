from django.db import models
from trips.models import Trip

class Expense(models.Model):
    # Categories based exactly on your PDF requirements
    CATEGORY_CHOICES = [
        ('Transport', 'Transport'),
        ('Stay', 'Stay'),
        ('Activities', 'Activities'),
        ('Meals', 'Meals'),
        ('Other', 'Other'),
    ]

    trip = models.ForeignKey(Trip, on_delete=models.CASCADE, related_name='expenses')
    title = models.CharField(max_length=100) # e.g., "Flight to Bali"
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField(null=True, blank=True)

    def __str__(self):
        return f"{self.title} - ${self.amount}"