"use client";

import { StarIcon } from "@heroicons/react/24/solid";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useState, useCallback, useEffect } from "react";

interface Testimonial {
  quote: string;
  author: string;
  company: string;
  avatar?: string;
}

export default function TestimonialCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  const [activeIndex, setActiveIndex] = useState(0);

  // Track active slide
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      {/* slider */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-6 px-2">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                min-w-full md:min-w-[33%] bg-base-100 shadow-md 
                rounded-xl p-6 hover:shadow-lg transition
                border border-slate-200 dark:border-slate-700
              "
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>

              <p className="mb-6 italic text-gray-700 dark:text-gray-300">
                “{t.quote}”
              </p>

              <div className="flex items-center gap-3">
                {t.avatar && (
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="font-semibold">{t.author}</p>
                  <p className="text-sm text-gray-500">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* pagination dots */}
      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`h-2 w-2 rounded-full transition ${
              idx === activeIndex
                ? "bg-slate-900 dark:bg-white scale-125"
                : "bg-slate-400 dark:bg-slate-500"
            }`}
            onClick={() => emblaApi && emblaApi.scrollTo(idx)}
          />
        ))}
      </div>
    </div>
  );
}
