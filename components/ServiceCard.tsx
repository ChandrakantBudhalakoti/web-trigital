import Link from "next/link";
import { CheckIcon } from "@heroicons/react/24/outline";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  link?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  link,
}: ServiceCardProps) {
  return (
    <div className="rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col h-full">
      {/* icon */}
      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5">
        {icon}
      </div>

      {/* title + text */}
      <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">
        {title}
      </h3>

      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* features */}
      <ul className="space-y-2 mb-5 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span className="text-sm tracking-wide dark:text-slate-200">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* Learn More */}
      {link && (
        <Link
          href={link}
          className="inline-block text-primary font-medium hover:underline text-sm border-t pt-3 border-slate-200 dark:border-slate-700"
        >
          Learn More →
        </Link>
      )}
    </div>
  );
}
