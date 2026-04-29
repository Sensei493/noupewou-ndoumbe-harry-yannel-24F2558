interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}

export function StatsCard({ title, value, icon, color }: StatsCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${color} shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group`}>
      <div className="absolute top-0 right-0 opacity-20 transform translate-x-6 -translate-y-6 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
        <div className="text-8xl">{icon}</div>
      </div>

      <div className="relative z-10">
        <p className="text-white/80 text-sm mb-2">{title}</p>
        <p className="text-white text-4xl">{value}</p>
      </div>

      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
    </div>
  );
}
