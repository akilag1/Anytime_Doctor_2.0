from rest_framework import serializers

from django.contrib.auth.models import User
# from .models import UserExtra

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'password')
