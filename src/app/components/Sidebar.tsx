import { ClipboardList, BarChart3 } from 'lucide-react';

interface SidebarProps {
  currentPage: 'survey' | 'analysis';
  onPageChange: (page: 'survey' | 'analysis') => void;
  responseCount: number;
}

export function Sidebar({ currentPage, onPageChange, responseCount }: SidebarProps) {
  return (
    <aside className="w-64 h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white p-6 fixed left-0 top-0 shadow-2xl">
      <div className="mb-8">
        <h1 className="text-3xl bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
          AnimeHub
        </h1>
        <p className="text-purple-300 text-sm mt-1">Data Collection</p>
      </div>

      <nav className="space-y-2">
        <button
          onClick={() => onPageChange('survey')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:translate-x-2 ${
            currentPage === 'survey'
              ? 'bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg shadow-purple-500/50'
              : 'hover:bg-white/10'
          }`}
        >
          <ClipboardList className="w-5 h-5" />
          <span>Survey Form</span>
        </button>

        <button
          onClick={() => onPageChange('analysis')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:translate-x-2 ${
            currentPage === 'analysis'
              ? 'bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg shadow-purple-500/50'
              : 'hover:bg-white/10'
          }`}
        >
          <BarChart3 className="w-5 h-5" />
          <span>Data Analysis</span>
        </button>
      </nav>

      <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
        <p className="text-xs text-purple-200">Total Responses</p>
        <p className="text-2xl mt-1">{responseCount}</p>
      </div>
    </aside>
  );
}
