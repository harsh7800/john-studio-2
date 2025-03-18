"use client";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { fetchImages } from "../action";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface imageData {
  id: string;
  url: string;
  category: string;
  path: string;
  size: number;
  type: string;
  created_at?: string;
  blurImage?: string;
}

function Portfolio({
  categories,
}: {
  categories: { id: string; name: string }[];
}) {
  const [activeFilter, setActiveFilter] = useState("");
  const [images, setImages] = useState<imageData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategoryImages() {
      const images = await fetchImages(activeFilter);

      if (images) {
        setImages(images);
      }
      setLoading(false);
    }
    fetchCategoryImages();
  }, [activeFilter]);
  return (
    <div className="min-h-screen bg-white relative">
      <Navbar color="black" />
      <div className=" px-[30px] mt-[50px] sm:px-[40px] lg:px-[75px] mx-auto py-[100px] ">
        {/* Portfolio Section */}
        <section className="mb-20">
          <h1 className="text-4xl font-bold mb-4">OUR WORK</h1>
          <p className="text-[#5a5a5a] mb-8 text-lg">
            Each client is unique and so is each project while we have delivered
            many Photoshoot project and design projects, however we need to
            honor the confidentiality of our client. Here is a quick glimpse of
            our portfolio:
          </p>

          <div className="flex space-x-6 mb-12 border-b border-gray-200">
            <button
              className={`pb-4 px-2 text-lg cursor-pointer transition-colors relative ${
                activeFilter === ""
                  ? "text-black  font-semibold after:absolute after:size-2 after:bg-[#F85D2E] after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:rounded-full "
                  : "text-gray-500 hover:text-gray-800"
              }`}
              onClick={() => setActiveFilter("")}
            >
              All
            </button>
            {categories.map((filter) => (
              <button
                key={filter.id}
                className={`pb-4 px-2 text-lg cursor-pointer capitalize transition-colors relative ${
                  activeFilter === filter.name
                    ? "text-black  font-semibold after:absolute after:size-2 after:bg-[#F85D2E] after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:rounded-full "
                    : "text-gray-500 hover:text-gray-800"
                }`}
                onClick={() => setActiveFilter(filter.name)}
              >
                {filter.name}
              </button>
            ))}
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-0">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                className="relative break-inside-avoid img-hover-zoom"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1, // Staggered delay
                  ease: "easeOut",
                }}
              >
                <Image
                  unoptimized
                  src={image.url || "/placeholder.svg"}
                  alt={`Wedding image ${image.id}`}
                  width={388}
                  height={477}
                  className="w-full object-cover rounded-sm"
                  placeholder="blur"
                  blurDataURL={image?.blurImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </div>

          {loading && (
            <div className="flex gap-3 flex-wrap items-start">
              {Array.from({ length: 10 }).map((_, i) => {
                return (
                  <Skeleton
                    className={cn(
                      "w-full max-w-[310px] h-[350px] ",
                      i % 2 == 0 && "h-[200px]"
                    )}
                    key={i}
                  />
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Portfolio;
