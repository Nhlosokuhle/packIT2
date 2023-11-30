from djoser.serializers import UserCreateSerializer, serializers
from django.contrib.auth import get_user_model
from .models import Booking

User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
      class Meta(UserCreateSerializer):
            model = User
            fields = ('id', 'email', 'name', 'password')

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'