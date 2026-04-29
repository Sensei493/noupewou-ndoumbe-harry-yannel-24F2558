import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { QuestionnaireForm } from './components/QuestionnaireForm';
import { DataAnalysis } from './components/DataAnalysis';
import { FloatingAnimeElements } from './components/FloatingAnimeElements';
import { AnimeImageCard } from './components/AnimeImageCard';
import { apiService } from '../services/api';

interface SurveyResponse {
  id: number;
  name: string;
  age: string;
  favoriteGenre: string;
  watchingFrequency: string;
  favoriteAnime: string;
  rating: string;
  timestamp: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'survey' | 'analysis'>('survey');
  const [responses, setResponses] = useState<SurveyResponse[]>([
    // Sample data to demonstrate the analysis features
    {
      id: 1,
      name: "Alex Johnson",
      age: "18-24",
      favoriteGenre: "Action",
      watchingFrequency: "Daily",
      favoriteAnime: "Demon Slayer",
      rating: "9",
      timestamp: new Date().toISOString()
    },
    {
      id: 2,
      name: "Maria Garcia",
      age: "18-24",
      favoriteGenre: "Romance",
      watchingFrequency: "Several times a week",
      favoriteAnime: "Your Name",
      rating: "10",
      timestamp: new Date().toISOString()
    },
    {
      id: 3,
      name: "James Smith",
      age: "25-34",
      favoriteGenre: "Action",
      watchingFrequency: "Weekly",
      favoriteAnime: "Attack on Titan",
      rating: "9",
      timestamp: new Date().toISOString()
    },
    {
      id: 4,
      name: "Sarah Chen",
      age: "18-24",
      favoriteGenre: "Fantasy",
      watchingFrequency: "Daily",
      favoriteAnime: "Demon Slayer",
      rating: "8",
      timestamp: new Date().toISOString()
    },
    {
      id: 5,
      name: "Michael Brown",
      age: "25-34",
      favoriteGenre: "Sci-Fi",
      watchingFrequency: "Several times a week",
      favoriteAnime: "Steins;Gate",
      rating: "10",
      timestamp: new Date().toISOString()
    },
    {
      id: 6,
      name: "Emma Wilson",
      age: "Under 18",
      favoriteGenre: "Comedy",
      watchingFrequency: "Daily",
      favoriteAnime: "One Piece",
      rating: "9",
      timestamp: new Date().toISOString()
    },
    {
      id: 7,
      name: "David Lee",
      age: "25-34",
      favoriteGenre: "Action",
      watchingFrequency: "Weekly",
      favoriteAnime: "One Piece",
      rating: "8",
      timestamp: new Date().toISOString()
    },
    {
      id: 8,
      name: "Lisa Anderson",
      age: "18-24",
      favoriteGenre: "Drama",
      watchingFrequency: "Occasionally",
      favoriteAnime: "Your Lie in April",
      rating: "10",
      timestamp: new Date().toISOString()
    },
    {
      id: 9,
      name: "Chris Taylor",
      age: "35+",
      favoriteGenre: "Action",
      watchingFrequency: "Monthly",
      favoriteAnime: "Demon Slayer",
      rating: "7",
      timestamp: new Date().toISOString()
    },
    {
      id: 10,
      name: "Anna Martinez",
      age: "18-24",
      favoriteGenre: "Slice of Life",
      watchingFrequency: "Several times a week",
      favoriteAnime: "K-On!",
      rating: "9",
      timestamp: new Date().toISOString()
    }
  ]);

  const handleFormSubmit = async (formData: Omit<SurveyResponse, 'id' | 'timestamp'>) => {
    try {
      await apiService.submitSurveyResponse(formData);
    } catch (error) {
      console.error("Failed to submit to backend", error);
    }

    const newResponse: SurveyResponse = {
      ...formData,
      id: responses.length + 1,
      timestamp: new Date().toISOString()
    };

    setResponses([...responses, newResponse]);
    setCurrentPage('analysis');

    // Show success message
    alert('Survey submitted successfully! Redirecting to data analysis...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <FloatingAnimeElements />

      {/* Floating Anime Image Cards */}
      <AnimeImageCard
        imageUrl="https://images.unsplash.com/photo-1763732397864-5b860bb298b0?w=200&h=300&fit=crop"
        title="Manga Collection"
        position="top-right"
      />
      <AnimeImageCard
        imageUrl="https://images.unsplash.com/photo-1631582053308-40f482e7ace5?w=200&h=300&fit=crop"
        title="Anime Character"
        position="bottom-right"
      />

      <Sidebar
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        responseCount={responses.length}
      />

      <main className="ml-64 p-8 relative z-10">
        {currentPage === 'survey' ? (
          <div className="animate-fadeIn">
            <div className="mb-8 text-center">
              <h2 className="text-4xl mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Anime Preferences Survey
              </h2>
              <p className="text-gray-600">Share your anime watching habits with us</p>
            </div>
            <QuestionnaireForm onSubmit={handleFormSubmit} />
          </div>
        ) : (
          <div className="animate-fadeIn">
            <div className="mb-8">
              <h2 className="text-4xl mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Data Analysis Dashboard
              </h2>
              <p className="text-gray-600">Survey results grouped, counted, and classified</p>
            </div>
            <DataAnalysis responses={responses} />
          </div>
        )}
      </main>
    </div>
  );
}