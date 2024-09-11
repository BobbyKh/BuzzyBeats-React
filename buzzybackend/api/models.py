from django.db import models

# Create your models here.

class Gallery (models.Model):
    images = models.ImageField(upload_to='images/', blank=True, null=True)
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name


class Service (models.Model):
    image = models.ImageField(upload_to='images/')
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    description = models.CharField(max_length=100)
    status = models.BooleanField( default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name


def delete(self, *args, **kwargs):
        # Delete the file associated with this model instance
    self.image.delete(save=False)
    super().delete(*args, **kwargs)
    
class Aboutus (models.Model):
    
    image = models.ImageField(upload_to='images/')
    description = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.description
    
    def delete (self, *args, **kwargs):
        # Delete the file associated with this model instance
        self.image.delete(save=False)
        super().delete(*args, **kwargs)
        
class Contactus (models.Model):
    
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    subject = models.CharField(max_length=100)
    message = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
    
class Team (models.Model):
    
    image = models.ImageField(upload_to='images/')
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    status = models.BooleanField( default=True)
    
    def delete (self, *args, **kwargs):
        # Delete the file associated with this model instance
        self.image.delete(save=False)
        super().delete(*args, **kwargs)
    
    def __str__(self):
        return self.name

class Artist (models.Model):

    image = models.ImageField(upload_to='images/')
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    status = models.BooleanField( default=True)
    
    def delete (self, *args, **kwargs):
        # Delete the file associated with this model instance
        self.image.delete(save=False)
        super().delete(*args, **kwargs)
    
    def __str__(self):
        return self.name

