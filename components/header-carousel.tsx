"use client";
import React, { useEffect, useState } from "react";
import header_decor_image from "@/public/header-image.png";
import header_decor_image2 from "@/public/header-image2.png";
import Image from "next/image";

interface HeaderCarouselProps {
  className?: string;
  width?: number;
  height?: number;
}

const HeaderCarousel: React.FC<HeaderCarouselProps> = ({
  className = "",
  width = 450,
  height = 450,
}) => {
  const [currentImage, setCurrentImage] = useState(header_decor_image);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentImage((prev) =>
          prev === header_decor_image ? header_decor_image2 : header_decor_image
        );
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={className}>
      <Image
        unoptimized
        src={currentImage}
        alt="decor-image"
        width={width}
        height={height}
        className={`transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default HeaderCarousel;
