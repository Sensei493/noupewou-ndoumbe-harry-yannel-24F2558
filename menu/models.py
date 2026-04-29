from django.db import models

class Anime(models.Model):
    name = models.CharField(max_length=200)
    type = models.CharField(max_length=100)
    genre = models.CharField(max_length=100)

class Collection(models.Model):
    views = models.IntegerField(default=0)

class Feature(models.Model):
    name = models.CharField(max_length=200)
    details = models.TextField()

class AnimeSurvey(models.Model):
       name = models.CharField(max_length=200)
       age = models.CharField(max_length=20, choices=[
           ('Under 18', 'Under 18'),
           ('18-24', '18-24'),
           ('25-34', '25-34'),
           ('35+', '35+'),
       ])
       favorite_genre = models.CharField(max_length=50, choices=[
           ('Action', 'Action'),
           ('Romance', 'Romance'),
           ('Comedy', 'Comedy'),
           ('Drama', 'Drama'),
           ('Fantasy', 'Fantasy'),
           ('Sci-Fi', 'Sci-Fi'),
           ('Horror', 'Horror'),
           ('Slice of Life', 'Slice of Life'),
       ])
       watching_frequency = models.CharField(max_length=50, choices=[
           ('Daily', 'Daily'),
           ('Several times a week', 'Several times a week'),
           ('Weekly', 'Weekly'),
           ('Monthly', 'Monthly'),
           ('Occasionally', 'Occasionally'),
       ])
       favorite_anime = models.CharField(max_length=200)
       rating = models.IntegerField()
       timestamp = models.DateTimeField(auto_now_add=True)

       def __str__(self):
           return f"{self.name} - {self.favorite_genre}"