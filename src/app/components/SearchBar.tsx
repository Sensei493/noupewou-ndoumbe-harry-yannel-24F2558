import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        type="text"
        placeholder="Search your anime collection..."
        className="w-full pl-12 pr-4 py-3 bg-white rounded-full shadow-md border-2 border-transparent focus:border-purple-400 focus:outline-none transition-all duration-300"
      />
    </div>
  );
}
