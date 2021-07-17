from rest_framework import serializers

from django.contrib.auth.models import User
from .models import UserExtra

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id' ,'username', 'first_name', 'last_name', 'email', 'password')
    
class UserExSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserExtra
        fields = ('user','contact_no')
        lookup_field = 'user'
