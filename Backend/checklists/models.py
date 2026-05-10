from django.db import models
from trips.models import Trip

class ChecklistItem(models.Model):
    trip = models.ForeignKey(Trip, on_delete=models.CASCADE, related_name='checklist_items')
    item_name = models.CharField(max_length=100)
    category = models.CharField(max_length=50) # e.g., Clothing, Documents, Electronics
    is_packed = models.BooleanField(default=False)

    def __str__(self):
        status = "Packed" if self.is_packed else "Pending"
        return f"{self.item_name} [{status}]"