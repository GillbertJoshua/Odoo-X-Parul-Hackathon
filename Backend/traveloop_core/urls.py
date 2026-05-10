from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('accounts.urls')), 
    path('api/', include('trips.urls')),
    path('api/', include('itinerary.urls')), 
    path('api/', include('budget.urls')), 
    
    # Add the final app!
    path('api/', include('checklists.urls')), 
]