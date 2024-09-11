from django.shortcuts import render
from django.http import HttpResponse
from h11 import Response
from rest_framework import generics
from .serializers import AboutusSerializer, ArtistSerializer, ContactusSerializer, GallerySerializer, ServiceSerializer, TeamSerializer
from .models import Aboutus, Artist, Contactus, Gallery, Service, Team
from rest_framework.decorators import api_view
from rest_framework import status

class ServiceListView(generics.ListCreateAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    
    def get_queryset(self):
        return Service.objects.all()
    
class AboutusListView(generics.ListCreateAPIView):
    queryset = Aboutus.objects.all()
    serializer_class = AboutusSerializer

class TeamListView(generics.ListCreateAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
class ContactusListView(generics.ListCreateAPIView):
    queryset = Contactus.objects.all()
    serializer_class = ContactusSerializer

class ArtistListView(generics.ListCreateAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer
    
class GalleryListView(generics.ListCreateAPIView):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer
    


@api_view(['POST'])
def contactus(request):
    if request.method == 'POST':
        serializer = ContactusSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
