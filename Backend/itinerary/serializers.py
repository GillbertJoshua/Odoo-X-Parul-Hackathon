from rest_framework import serializers
from .models import Stop, Activity

class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Activity
        fields = '__all__'

class StopSerializer(serializers.ModelSerializer):
    # This automatically bundles the activities into the stop JSON!
    activities = ActivitySerializer(many=True, read_only=True)
    
    class Meta:
        model = Stop
        fields = '__all__'