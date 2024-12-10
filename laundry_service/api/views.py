from rest_framework import viewsets, permissions
from .models import Service, Order
from .serializers import ServiceSerializer, OrderSerializer

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    permission_classes = [permissions.AllowAny]

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated]  # Add this line to enforce authentication

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)  # Assign authenticated user