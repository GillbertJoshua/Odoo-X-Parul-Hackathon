from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StopViewSet, ActivityViewSet

router = DefaultRouter()
router.register(r'stops', StopViewSet, basename='stop')
router.register(r'activities', ActivityViewSet, basename='activity')

urlpatterns = [
    path('', include(router.urls)),
]