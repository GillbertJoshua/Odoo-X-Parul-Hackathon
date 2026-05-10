from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('accounts.urls')), 
    path('api/', include('trips.urls')),
    path('api/', include('itinerary.urls')), 
    path('api/', include('budget.urls')), 
    path('api/', include('checklists.urls')), 
    path('api/', include('notes.urls')), 
]