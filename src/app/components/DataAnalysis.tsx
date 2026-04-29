import { BarChart3, PieChart, TrendingUp, Users } from 'lucide-react';

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

interface DataAnalysisProps {
  responses: SurveyResponse[];
}

export function DataAnalysis({ responses }: DataAnalysisProps) {
  // Group by genre
  const genreCount = responses.reduce((acc, response) => {
    acc[response.favoriteGenre] = (acc[response.favoriteGenre] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Group by watching frequency
  const frequencyCount = responses.reduce((acc, response) => {
    acc[response.watchingFrequency] = (acc[response.watchingFrequency] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Group by age
  const ageCount = responses.reduce((acc, response) => {
    acc[response.age] = (acc[response.age] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Most mentioned anime
  const animeCount = responses.reduce((acc, response) => {
    const anime = response.favoriteAnime.toLowerCase();
    acc[anime] = (acc[anime] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Sort and get top anime
  const topAnime = Object.entries(animeCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  // Sort genres by count
  const sortedGenres = Object.entries(genreCount)
    .sort(([, a], [, b]) => b - a);

  // Calculate average rating
  const avgRating = responses.length > 0
    ? (responses.reduce((sum, r) => sum + parseFloat(r.rating), 0) / responses.length).toFixed(1)
    : '0';

  return (
    <div className="space-y-8">
      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-6 text-white shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-8 h-8" />
            <span className="text-3xl">{responses.length}</span>
          </div>
          <p className="text-purple-100">Total Responses</p>
        </div>

        <div className="bg-gradient-to-br from-pink-500 to-pink-700 rounded-xl p-6 text-white shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <BarChart3 className="w-8 h-8" />
            <span className="text-3xl">{Object.keys(genreCount).length}</span>
          </div>
          <p className="text-pink-100">Genres Mentioned</p>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-6 text-white shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-8 h-8" />
            <span className="text-3xl">{avgRating}</span>
          </div>
          <p className="text-blue-100">Average Rating</p>
        </div>

        <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl p-6 text-white shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <PieChart className="w-8 h-8" />
            <span className="text-3xl">{topAnime.length > 0 ? topAnime[0][1] : 0}</span>
          </div>
          <p className="text-indigo-100">Most Viewed</p>
        </div>
      </div>

      {/* All Responses Table */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
          <h3 className="text-2xl text-white">All Survey Responses</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-gray-700">ID</th>
                <th className="px-6 py-4 text-left text-gray-700">Name</th>
                <th className="px-6 py-4 text-left text-gray-700">Age</th>
                <th className="px-6 py-4 text-left text-gray-700">Genre</th>
                <th className="px-6 py-4 text-left text-gray-700">Frequency</th>
                <th className="px-6 py-4 text-left text-gray-700">Favorite Anime</th>
                <th className="px-6 py-4 text-left text-gray-700">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {responses.map((response, index) => (
                <tr key={response.id} className="hover:bg-purple-50 transition-colors">
                  <td className="px-6 py-4 text-gray-900">{index + 1}</td>
                  <td className="px-6 py-4 text-gray-900">{response.name}</td>
                  <td className="px-6 py-4 text-gray-600">{response.age}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                      {response.favoriteGenre}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{response.watchingFrequency}</td>
                  <td className="px-6 py-4 text-gray-900">{response.favoriteAnime}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                      {response.rating}/10
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Genre Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6">
            <h3 className="text-xl text-white">Genre Distribution</h3>
          </div>
          <div className="p-6">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-gray-700">Genre</th>
                  <th className="px-4 py-3 text-right text-gray-700">Count</th>
                  <th className="px-4 py-3 text-right text-gray-700">Percentage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sortedGenres.map(([genre, count]) => (
                  <tr key={genre} className="hover:bg-purple-50">
                    <td className="px-4 py-3 text-gray-900">{genre}</td>
                    <td className="px-4 py-3 text-right text-gray-900">{count}</td>
                    <td className="px-4 py-3 text-right">
                      <span className="text-purple-600">
                        {((count / responses.length) * 100).toFixed(1)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-pink-600 to-pink-800 p-6">
            <h3 className="text-xl text-white">Most Viewed Anime</h3>
          </div>
          <div className="p-6">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-gray-700">Rank</th>
                  <th className="px-4 py-3 text-left text-gray-700">Anime Title</th>
                  <th className="px-4 py-3 text-right text-gray-700">Mentions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {topAnime.map(([anime, count], index) => (
                  <tr key={anime} className="hover:bg-pink-50">
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 text-white rounded-full">
                        {index + 1}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-900 capitalize">{anime}</td>
                    <td className="px-4 py-3 text-right">
                      <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full">
                        {count}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Watching Frequency & Age Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6">
            <h3 className="text-xl text-white">Watching Frequency</h3>
          </div>
          <div className="p-6">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-gray-700">Frequency</th>
                  <th className="px-4 py-3 text-right text-gray-700">Count</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {Object.entries(frequencyCount)
                  .sort(([, a], [, b]) => b - a)
                  .map(([freq, count]) => (
                    <tr key={freq} className="hover:bg-blue-50">
                      <td className="px-4 py-3 text-gray-900">{freq}</td>
                      <td className="px-4 py-3 text-right">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                          {count}
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-6">
            <h3 className="text-xl text-white">Age Distribution</h3>
          </div>
          <div className="p-6">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-gray-700">Age Group</th>
                  <th className="px-4 py-3 text-right text-gray-700">Count</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {Object.entries(ageCount)
                  .sort(([, a], [, b]) => b - a)
                  .map(([age, count]) => (
                    <tr key={age} className="hover:bg-indigo-50">
                      <td className="px-4 py-3 text-gray-900">{age}</td>
                      <td className="px-4 py-3 text-right">
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">
                          {count}
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
