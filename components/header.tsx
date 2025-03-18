import React from "react";
import { Button } from "./ui/button";
import header_baby_image from "@/public/header-baby.png";
import header_wed_image from "@/public/header-wedd-shoot.png";
import header_fashion_image from "@/public/header-fashion-shoot.png";
import header_birthday_image from "@/public/header-birthday-shoot.png";
import HalfCylinderString from "@/public/header-string.svg";
import HalfCylinderImage from "./half-cylinder-image";
import Image from "next/image";
import HeaderCarousel from "./header-carousel";

const Header = () => {
  return (
    <header className="flex justify-between items-center min-h-[750px] h-screen relative">
      <div className="text-[65px] font-semibold w-full relative z-5 flex flex-col justify-start items-center sm:items-start sm:pl-[40px] lg:pl-[75px] gap-6">
        <h1 className="text-[25px] sm:text-[35px] lg:text-[45px] xl:text-[60px] leading-[35px] sm:leading-[65px] text-center sm:text-left">
          Capture best moments <br /> of your life
        </h1>
        <Button
          variant={"ghost"}
          className="w-1/2 sm:w-[250px] text-[20px] font-semibold h-14 border border-black relative rounded-none"
        >
          Explore More
          <span className="absolute -right-[6px] bg-white -top-[6px] size-3 border border-black"></span>
          <span className="absolute -left-[6px] bg-white -top-[6px] size-3 border border-black"></span>
          <span className="absolute -left-[6px] bg-white -bottom-[6px] size-3 border border-black"></span>
          <span className="absolute -right-[6px] bg-white -bottom-[6px] size-3 border border-black"></span>
        </Button>

        <div className="flex items-end gap-12 mt-[10px] sm:mt-[50px]">
          <HalfCylinderImage
            absolute
            caption="Just Born Babies"
            image={header_baby_image}
            className="hidden sm:block"
          />
          <HeaderCarousel
            width={250}
            height={250}
            className="block sm:hidden"
          />
          <div className="p-6 min-w-[274px] relative hidden 2xl:flex items-center justify-center bg-white">
            <p className="w-[208px] relative text-[16px] font-medium">
              Life is like a camera, focus on what&apos;s important and capture
              the good times.
            </p>
            <span className="w-[100px] bg-black h-[1px] absolute -top-0 -left-0"></span>
            <span className="w-[100px] bg-black h-[1px] absolute -bottom-0 -right-0"></span>
            <span className="w-[1px] bg-black h-[122px] absolute -bottom-0 -right-0"></span>
            <span className="w-[1px] bg-black h-[120px] absolute -bottom-0 -left-0"></span>
          </div>
        </div>
      </div>
      <HeaderCarousel
        width={450}
        height={450}
        className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-1/2 z-1 -translate-x-1/2"
      />
      <div className=" hidden sm:flex flex-col  justify-center gap-[50px] items-end bg-black relative z-0 w-full h-full pr-[40px] lg:pr-[75px] pt-20">
        <HeaderCarousel
          width={500}
          height={500}
          className="block lg:hidden absolute top-1/2 -translate-y-1/2 left-1/2 z-1 -translate-x-1/2 "
        />
        <div className="w-fit hidden lg:flex justify-center items-center">
          <h1 className="relative text-[#454545] text-[70px] hidden xl:block font-semibold -rotate-90 select-none ">
            Best Dreamer
            <Image
              className="absolute -bottom-25 -right-24 rotate-90"
              src={HalfCylinderString}
              alt="string"
            />
          </h1>
          <div className="flex gap-8 justify-center flex-col">
            <HalfCylinderImage
              caption="Wedding shoot"
              image={header_wed_image}
              className="text-white"
              imageClassName="w-[150px]"
            />
            <HalfCylinderImage
              caption="fashion photoshoot"
              image={header_fashion_image}
              imageClassName="w-[150px]"
              className="text-white"
            />
            <HalfCylinderImage
              caption="birthday photoshoot"
              image={header_birthday_image}
              imageClassName="w-[150px]"
              className="text-white"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
