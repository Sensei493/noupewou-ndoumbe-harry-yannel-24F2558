import { Star, Play } from 'lucide-react';

interface AnimeCardProps {
  title: string;
  image: string;
  rating: number;
  episodes: number;
  status: string;
}

export function AnimeCard({ title, image, rating, episodes, status }: AnimeCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-purple-200 to-pink-200">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <Play className="w-4 h-4" fill="white" />
              Watch
            </button>
            <div className="flex items-center gap-1 text-yellow-400 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
              <Star className="w-5 h-5" fill="currentColor" />
              <span className="text-white">{rating}</span>
            </div>
          </div>
        </div>

        <div className="absolute top-3 right-3">
          <span className="bg-purple-500 text-white text-xs px-3 py-1 rounded-full">
            {status}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">{title}</h3>
        <p className="text-gray-500 text-sm">{episodes} Episodes</p>
      </div>
    </div>
  );
}
