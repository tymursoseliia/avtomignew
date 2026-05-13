"use client";

import { useState, useEffect } from "react";

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Меняем каждые 5 секунд
    
    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-slate-900/50 rounded-2xl">
        <span className="text-slate-500">Нет фото</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-700">
      {images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Автомобиль ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === currentIndex ? "opacity-90 hover:opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
    </div>
  );
}
