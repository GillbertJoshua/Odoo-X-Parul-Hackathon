from rest_framework import serializers
from .models import Trip

class TripSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trip
        fields = '__all__'
        # The backend will automatically handle these, the frontend shouldn't send them
        read_only_fields = ('user', 'created_at')