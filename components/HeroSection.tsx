import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundClass?: string;
  isDark?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink = "/contact-us",
  backgroundClass = "bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900",
  isDark = true,
}: HeroSectionProps) {
  return (
    <section
      className={`${backgroundClass} ${
        isDark ? "text-white" : "text-gray-900"
      } py-20 px-4 sm:py-32`}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-xl sm:text-2xl mb-6 opacity-90">{subtitle}</p>
        {description && (
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-85">
            {description}
          </p>
        )}
        {ctaText && (
          <a
            href={ctaLink}
            aria-label={`Navigate to ${ctaText}`}
            className="inline-flex items-center px-6 py-3 mt-6 text-lg font-semibold rounded-md 
               bg-white/10 hover:bg-white/20 text-white backdrop-blur 
               transition gap-2"
          >
            <span>{ctaText}</span>
            <ArrowRightIcon className="w-5 h-5" />
          </a>
        )}
      </div>
    </section>
  );
}
