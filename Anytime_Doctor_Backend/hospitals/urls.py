from django.urls import include, path
from rest_framework import routers
from . import views
from .routers import router

router = routers.DefaultRouter()
router.register(r'hospitals', views.HospitalViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # path('accounts/', include(router.urls))
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
