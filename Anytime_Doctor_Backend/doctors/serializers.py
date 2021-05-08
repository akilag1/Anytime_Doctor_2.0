from rest_framework import serializers

from .models import doctor

class DoctorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = doctor
        fields = ('name', 'speciality', 'hospital', 'email', 'picture', 'description', 'available_online', 'available_person')
    
