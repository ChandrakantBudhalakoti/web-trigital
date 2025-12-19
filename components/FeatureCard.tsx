interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group bg-white dark:bg-slate-700/40 rounded-xl p-8 border border-slate-200 dark:border-slate-600 hover:border-primary shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center gap-4 hover:-translate-y-1">
      {/* Icon container */}
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 tracking-wide">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
