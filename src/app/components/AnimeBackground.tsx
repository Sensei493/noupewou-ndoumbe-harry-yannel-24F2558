export function AnimeBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Circles - Like anime spirit orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400/20 rounded-full animate-float blur-xl"></div>
      <div className="absolute top-40 right-20 w-40 h-40 bg-pink-400/20 rounded-full animate-float blur-xl" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-36 h-36 bg-blue-400/20 rounded-full animate-float blur-xl" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-indigo-400/20 rounded-full animate-float blur-xl" style={{ animationDelay: '1.5s' }}></div>

      {/* Sparkles */}
      <div className="absolute top-1/4 left-1/3">
        <div className="w-2 h-2 bg-yellow-300 rounded-full animate-sparkle"></div>
      </div>
      <div className="absolute top-1/2 right-1/4">
        <div className="w-3 h-3 bg-pink-300 rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }}></div>
      </div>
      <div className="absolute bottom-1/3 left-1/2">
        <div className="w-2 h-2 bg-purple-300 rounded-full animate-sparkle" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Rotating decorative elements */}
      <div className="absolute top-10 right-10 w-64 h-64 opacity-5">
        <svg viewBox="0 0 100 100" className="animate-rotateSlow">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-purple-500" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-pink-500" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-500" />
        </svg>
      </div>
    </div>
  );
}
