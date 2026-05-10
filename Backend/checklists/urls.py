from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ChecklistItemViewSet

router = DefaultRouter()
router.register(r'checklists', ChecklistItemViewSet, basename='checklist')

urlpatterns = [
    path('', include(router.urls)),
]