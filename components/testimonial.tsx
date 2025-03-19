"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { createClient } from "@/app/utils/supabase/client";

interface Testimonial {
  id: number;
  name: string;
  message: string;
  profile_url: string;
  rating: number;
}

function Testimonial() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function FetchTestimonials() {
      const supabase = createClient();
      const { data, error } = await supabase.from("testimonials").select("*");
      console.log("error: ", error);

      console.log("data: ", data);
      setTestimonials(data || []);
    }
    FetchTestimonials();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center relative overflow-hidden bg-[url('/testimonials-bg.png')] bg-center bg-cover">
      {/* Background Design */}

      <div className="max-w-4xl mx-auto px-4 py-16 relative">
        {/* Design & Photography Text */}
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm tracking-wider">
            Design & Photography
          </p>
          <h2 className="text-white text-3xl font-semibold mt-2">
            Valuable Life&apos;s
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-18 h-[1px] bg-white"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-18 h-[1px] bg-white"></div>
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="relative">
          <div className="text-center px-8 md:px-16">
            <div className="flex justify-center mb-4">
              <div className=" size-40 relative z-10 rounded-md border-4 overflow-visible">
                <img
                  src={
                    testimonials[currentIndex]?.profile_url ||
                    `https://xsgames.co/randomusers/avatar.php?g=male`
                  }
                  alt={testimonials[currentIndex]?.name}
                  className="w-full h-full object-cover relative z-10"
                />
                <span className="size-40 absolute border z-5 border-[#FF4C00] -right-5 -top-5"></span>
              </div>
            </div>

            <div className="flex justify-center gap-1 mb-2">
              {[...Array(testimonials[currentIndex]?.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ★
                </span>
              ))}
            </div>

            <h3 className="text-white font-medium capitalize">
              {testimonials[currentIndex]?.name}
            </h3>
            <p className="text-gray-300 italic text-lg mb-8">
              &quot;{testimonials[currentIndex]?.message}&quot;
            </p>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-blue-500 w-4" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
