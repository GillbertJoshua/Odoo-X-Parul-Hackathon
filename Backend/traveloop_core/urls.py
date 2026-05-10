from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('accounts.urls')), 
    
    # Uncomment this line!
    path('api/', include('trips.urls')),
    
    path('api/', include('itinerary.urls')),
    # path('api/budget/', include('budget.urls')),
]