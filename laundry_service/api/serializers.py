from rest_framework import serializers
from .models import Service, Order
from django.contrib.auth import get_user_model

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=get_user_model().objects.all(), required=False)  # Serialize user
    services =serializers.PrimaryKeyRelatedField(queryset=Service.objects.all(), many=True)  # many=True for multiple services

    class Meta:
        model = Order
        fields = ['id', 'user', 'name', 'address', 'pickup_time', 'delivery_time', 'services', 'payment_method', 'status', 'created_at', 'updated_at']