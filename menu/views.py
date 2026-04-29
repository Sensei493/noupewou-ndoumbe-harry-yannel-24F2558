from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Count, Avg
from .models import Anime, Collection, Feature
import json

# Serve React App
class ReactAppView(TemplateView):
    template_name = 'index.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context

# API endpoints for React
def get_anime_list(request):
    """API endpoint to get all anime"""
    try:
        anime = Anime.objects.all().values('id', 'name', 'type', 'genre')
        return JsonResponse(list(anime), safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

def get_collections(request):
    """API endpoint to get all collections"""
    try:
        collections = Collection.objects.all().values('id', 'views')
        return JsonResponse(list(collections), safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

def get_features(request):
    """API endpoint to get all features"""
    try:
        features = Feature.objects.all().values('id', 'name', 'details')
        return JsonResponse(list(features), safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

@csrf_exempt
@require_http_methods(["POST"])
def submit_survey(request):
    """API endpoint to submit survey response"""
    try:
        data = json.loads(request.body)
        from .models import AnimeSurvey
        AnimeSurvey.objects.create(
            name=data.get('name', ''),
            age=data.get('age', ''),
            favorite_genre=data.get('favoriteGenre', ''),
            watching_frequency=data.get('watchingFrequency', ''),
            favorite_anime=data.get('favoriteAnime', ''),
            rating=int(data.get('rating', 0)) if data.get('rating') else 0
        )
        return JsonResponse({'status': 'success', 'message': 'Survey response received'})
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON'}, status=400)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

def get_analytics(request):
    """API endpoint to get analytics data"""
    try:
        anime_count = Anime.objects.count()
        collection_count = Collection.objects.count()
        total_views = Collection.objects.aggregate(total=Count('views'))['total'] or 0
        
        analytics = {
            'total_anime': anime_count,
            'total_collections': collection_count,
            'total_views': total_views,
        }
        return JsonResponse(analytics)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)