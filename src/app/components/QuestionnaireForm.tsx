import { useState } from 'react';
import { User, Film, Star, Clock, Send } from 'lucide-react';

interface FormData {
  name: string;
  age: string;
  favoriteGenre: string;
  watchingFrequency: string;
  favoriteAnime: string;
  rating: string;
}

interface QuestionnaireFormProps {
  onSubmit: (data: FormData) => void;
}

export function QuestionnaireForm({ onSubmit }: QuestionnaireFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    favoriteGenre: '',
    watchingFrequency: '',
    favoriteAnime: '',
    rating: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-2xl mx-auto animate-slideUp">
      <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-purple-200 animate-pulseGlow">
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-4 animate-bounce-soft">
            <Film className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl mb-2 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-gradientShift">
            Anime Preferences Survey
          </h2>
          <p className="text-gray-600">Help us understand your anime watching habits!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-gray-700">
              <User className="w-5 h-5 text-purple-500" />
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-400 focus:outline-none transition-all"
              placeholder="Enter your name"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-gray-700">
              <User className="w-5 h-5 text-purple-500" />
              Age Group
            </label>
            <select
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-400 focus:outline-none transition-all"
            >
              <option value="">Select age group</option>
              <option value="Under 18">Under 18</option>
              <option value="18-24">18-24</option>
              <option value="25-34">25-34</option>
              <option value="35+">35+</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-gray-700">
              <Star className="w-5 h-5 text-purple-500" />
              Favorite Genre
            </label>
            <select
              name="favoriteGenre"
              value={formData.favoriteGenre}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-400 focus:outline-none transition-all"
            >
              <option value="">Select a genre</option>
              <option value="Action">Action</option>
              <option value="Romance">Romance</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Horror">Horror</option>
              <option value="Slice of Life">Slice of Life</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-gray-700">
              <Clock className="w-5 h-5 text-purple-500" />
              How often do you watch anime?
            </label>
            <select
              name="watchingFrequency"
              value={formData.watchingFrequency}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-400 focus:outline-none transition-all"
            >
              <option value="">Select frequency</option>
              <option value="Daily">Daily</option>
              <option value="Several times a week">Several times a week</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Occasionally">Occasionally</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-gray-700">
              <Film className="w-5 h-5 text-purple-500" />
              Favorite Anime Title
            </label>
            <input
              type="text"
              name="favoriteAnime"
              value={formData.favoriteAnime}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-400 focus:outline-none transition-all"
              placeholder="e.g., Demon Slayer, Naruto, One Piece"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-gray-700">
              <Star className="w-5 h-5 text-purple-500" />
              Overall Rating (1-10)
            </label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
              min="1"
              max="10"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-400 focus:outline-none transition-all"
              placeholder="Rate from 1 to 10"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 rounded-lg flex items-center justify-center gap-2 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Send className="w-5 h-5" />
            Submit Survey
          </button>
        </form>
      </div>
    </div>
  );
}
