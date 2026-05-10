from django.db import models
from django.contrib.auth.models import User

class Trip(models.Model):
    # Security: Every trip must be tied to the user who created it
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='trips')
    
    # PDF Requirements: Name, dates, description, and optional photo 
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    start_date = models.DateField()
    end_date = models.DateField()
    cover_photo = models.ImageField(upload_to='trip_covers/', blank=True, null=True)
    
    # Extra helpful fields
    is_public = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.start_date})"