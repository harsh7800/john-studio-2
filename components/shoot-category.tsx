import React from "react";
import long_arrow_right from "@/public/long-arrow-right.svg";
import wed_shoot from "@/public/wed_shoot.png";
import baby_shoot from "@/public/baby_shoot.png";
import pregnancy_shoot from "@/public/pregnancy_shoot.png";
import post_wed_shoot from "@/public/post_wed_shoot.png";
import solo_shoot from "@/public/solo_shoot.png";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const ShootCategory = () => {
  const shoots = [
    {
      image: wed_shoot,
      title: "Complete Wedding Shoot",
    },
    {
      image: post_wed_shoot,
      title: "Post wedding Shoot",
    },
    {
      image: pregnancy_shoot,
      title: "Pregnancy Shoot",
    },
    {
      image: baby_shoot,
      title: "Baby Shoot",
    },
    {
      image: solo_shoot,
      title: "Complete Solo Shoot",
    },
  ];

  return (
    <div className="px-[30px] sm:px-[45px] lg:px-[75px] space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
          We are giving a best solution for your Celebrations
        </h2>
        <a
          href="/portfolio"
          className="hidden md:flex text-[#FF4C00] items-center text-[20px] font-semibold hover:text-black transition-colors"
        >
          View all
          <Image src={long_arrow_right} alt="arrow" className="ml-4" />
        </a>
      </div>

      <p className="text-[#5a5a5a] max-w-2xl">
        Explore our portfolio and see why M Capture Studio is your perfect
        choice for capturing every precious moment and creating memories visual
        narrative.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2  items-center w-ful place-content-center ">
        {shoots.map((shoot, i) => {
          return (
            <div
              className="relative space-y-3 w-full h-fit group/image "
              key={i}
            >
              <Image
                unoptimized
                className="object-cover h-[420px]  rounded-md group-hover/image:brightness-50"
                src={shoot.image}
                alt={shoot.title}
              />
              <p className="font-semibold">{shoot.title}</p>
              <Link href={"/portfolio"}>
                <Button
                  className="text-[#FF4C00] font-semibold border opacity-0 transition-all  group-hover/image:opacity-100 cursor-pointer px-14 py-6 text-md absolute top-1/2 left-1/2 -translate-x-1/2 bg-white"
                  variant={"ghost"}
                >
                  View All
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShootCategory;
