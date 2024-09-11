from rest_framework import serializers

from .models import Artist, Contactus, Gallery, Service, Team


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'

class AboutusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'
        
class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = '__all__'

class ContactusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contactus
        fields = '__all__'
class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = '__all__'
        
class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = '__all__'
        


        
        