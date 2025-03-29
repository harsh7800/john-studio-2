"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const backgroundImages = [
  "https://images.unsplash.com/photo-1742435456486-3a0059c05e38?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1669748151567-f2c4c55be354?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1734466649856-6f7677852131?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const FullscreenHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevImageIndex(currentImageIndex);
      setIsTransitioning(true);
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );

      // Reset the transition state after animation completes
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);

      return () => clearTimeout(timer);
    }, 6000);

    return () => clearInterval(interval);
  }, [ ]);

  return (
    <section className="relative w-full h-screen overflow-hidden text-white">
      {/* Current background image */}
      <div
        className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ${
          isTransitioning ? "opacity-100" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-photo-overlay"></div>
      </div>

      {/* Previous background image (for smooth transition) */}
      <div
        className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ${
          isTransitioning ? "opacity-0" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${backgroundImages[prevImageIndex]})` }}
      >
        <div className="absolute inset-0 bg-photo-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-photo-text leading-tight mb-4 max-w-5xl animate-fade-in text-shadow-lg font-semibold">
          Capturing Moments That Last Forever
        </h1>
        <p className="text-photo-muted text-lg md:text-xl max-w-2xl mb-8 animate-fade-up delay-75 text-shadow">
          Professional photography for weddings, portraits, and commercial
          projects
        </p>
        <Link
          href="/contact"
          className="hover:text-white text-black rounded-md border border-photo-text px-8 py-3 text-sm uppercase tracking-widest transition-all duration-300 animate-fade-up delay-150 bg-white hover:bg-transparent"
        >
          Book a Session
        </Link>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default FullscreenHero;
