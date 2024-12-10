from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ServiceViewSet, OrderViewSet

router = DefaultRouter()
router.register(r'services', ServiceViewSet)
router.register(r'orders', OrderViewSet)

urlpatterns = [
    path('', include(router.urls)),
]


'''



http://127.0.0.1:8000/api/token/ POST

{
  "username": "your_username", #Arman170616
  "password": "your_password"  #yourpassword
}

http://127.0.0.1:8000/api/orders/   


{
  "name": "Order Name",
  "address": "123 Main St",
  "pickup_time": "2024-12-15T10:00:00Z",
  "delivery_time": "2024-12-15T14:00:00Z",
  "services": [1, 2],  // Use the valid service IDs from your database
  "payment_method": "Cash on Delivery"
}



'''
