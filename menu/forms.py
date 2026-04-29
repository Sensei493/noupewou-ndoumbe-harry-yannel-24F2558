from django import forms
from .models import AnimeSurvey

class AnimeSurveyForm(forms.ModelForm):
       class Meta:
           model = AnimeSurvey
           fields = ['name', 'age', 'favorite_genre', 'watching_frequency', 
                    'favorite_anime', 'rating']
           widgets = {
               'name': forms.TextInput(attrs={'class': 'w-full px-4 py-3 border-2 border-gray-200 rounded-lg'}),
               'rating': forms.NumberInput(attrs={'min': 1, 'max': 10}),
           }