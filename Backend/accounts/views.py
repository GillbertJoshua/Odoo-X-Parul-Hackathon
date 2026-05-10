from rest_framework import generics
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated 

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer




# ... (Keep your RegisterView up here) ...

class UserDetailView(APIView):
    # You MUST be logged in to access this
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # request.user automatically gets the user from the JWT token!
        serializer = UserSerializer(request.user)
        return Response(serializer.data)