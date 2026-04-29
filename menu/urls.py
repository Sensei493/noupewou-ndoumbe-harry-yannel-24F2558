from django.urls import path
from . import views

urlpatterns = [
    # React App
    path('', views.ReactAppView.as_view(), name='home'),
    
    # API endpoints
    path('api/anime/', views.get_anime_list, name='anime_list'),
    path('api/collections/', views.get_collections, name='collections'),
    path('api/features/', views.get_features, name='features'),
    path('api/survey/', views.submit_survey, name='submit_survey'),
    path('api/analytics/', views.get_analytics, name='analytics'),
]