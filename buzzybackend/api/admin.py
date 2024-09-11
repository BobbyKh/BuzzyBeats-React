from django.contrib import admin
from django.utils.html import format_html
from api.models import Aboutus, Artist, Contactus, Gallery, Service, Team

admin.site.site_header = 'Buzzy Beats'
admin.site.site_title = 'Admin Panel'
admin.site.index_title = 'Admin Panel'

# Register your models here.


class ArtistAdmin(admin.ModelAdmin):
    
    def image_tag(self, obj):
        
        if obj.image:    
            return format_html('<img src="{}" width="150" height="150" />'.format(obj.image.url))
        else :
            return 'No Image'
    

    image_tag.short_description = 'Image'
    
    
    readonly_fields = ('id', 'image_tag', 'created_at', 'updated_at', 'status')
    list_display = ['id', 'name', 'image_tag', 'created_at', 'updated_at', 'status']
    
    def get_actions(self, request):
        actions = super().get_actions(request)
        if request.user.is_superuser:
            return actions
        else:
            del actions['delete_selected']
        return actions

    def has_delete_permission(self, request, obj=None):
        if request.user.is_superuser:
            return True
        return False
    
    def has_change_permission(self, request, obj=None):
        if request.user.is_superuser:
            return True
        return False

admin.site.register(Artist, ArtistAdmin)

admin.site.register([
    Service,
    Team,
    Aboutus,
    Contactus,
])

class GalleryAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'created_at', 'updated_at']
    
    def display_image(self, obj):
        return format_html('<img src="{}" width="150" height="150" />'.format(obj.image.url))

    display_image.short_description = 'Image'

    readonly_fields = ('id', 'display_image', 'created_at', 'updated_at')
    

admin.site.register(Gallery, GalleryAdmin)


