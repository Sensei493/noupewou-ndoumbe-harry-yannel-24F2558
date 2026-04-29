interface AnimeImageCardProps {
  imageUrl: string;
  title: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export function AnimeImageCard({ imageUrl, title, position }: AnimeImageCardProps) {
  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
  };

  return (
    <div
      className={`fixed ${positionClasses[position]} w-32 h-40 rounded-xl overflow-hidden shadow-2xl transform hover:scale-110 transition-all duration-300 animate-float z-10 group cursor-pointer`}
      style={{ animationDelay: `${Math.random() * 2}s` }}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-2 left-2 right-2">
          <p className="text-white text-xs truncate">{title}</p>
        </div>
      </div>
      {/* Sparkle effect on hover */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-3 h-3 bg-yellow-300 rounded-full animate-sparkle"></div>
      </div>
    </div>
  );
}
