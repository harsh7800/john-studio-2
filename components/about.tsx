import { Camera } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import about_img from "@/public/about-image.png";
import shoot_icon from "@/public/shoot_icon.svg";
import camera_icon from "@/public/camera_tripod_icon.svg";
import edit_icon from "@/public/image_icon.svg";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const About = () => {
  return (
    <section className="min-h-screen px-[30px] sm:px-[40px] lg:px-[75px] ">
      {/* About Section 1 */}
      <div className="flex flex-col-reverse md:flex-row justify-between gap-12 items-center">
        <div>
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <Camera />
            <span className="text-xs uppercase font-semibold tracking-wider">
              Design & Photo Studio
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Our Studio
          </h1>

          <p className="text-xl mb-4 font-semibold">
            Welcome to John Studio - where every moment is a masterpiece.
          </p>

          <p className="text-gray-600 mb-8 max-w-3xl leading-relaxed">
            We specialize in capturing life&aos;s most precious moments with
            artistic precision and creative excellence. Our team of professional
            photographers brings years of experience and a passionate eye for
            detail to every shoot, ensuring your memories are preserved in
            stunning clarity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size={"lg"}
              className="bg-black text-white px-8 h-14 text-[16px] rounded-lg hover:bg-gray-800 transition-colors"
            >
              Discover More
            </Button>
            <a
              href="tel:+919999999999"
              className="inline-flex items-center justify-center px-8 py-0 font-semibold text-[20px] border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              +91 99999 99999
            </a>
          </div>
        </div>

        <Image
          src={about_img}
          alt="about image"
          className="aspect-square  object-cover"
        />
      </div>

      {/* About Section 2 */}

      <div className=" mx-auto py-16 lg:py-24">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider mb-2">
            Design & Photography
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Great Creative Elements
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-18 h-[1px] bg-black"></div>
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <div className="w-18 h-[1px] bg-black"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-12">
          {/* Client Interaction */}
          <Card
            image={shoot_icon}
            title="Client Interaction"
            content="Have an in-depth discussion with clients to understand their expectations, preferred styles, and specific requirements."
          />
          <Card
            image={camera_icon}
            title="Shooting"
            content="Choose the perfect location that complements the
 shoot's theme. Consider lighting conditions, 
background elements, and accessibility."
          />
          <Card
            image={edit_icon}
            title="Editorial"
            content="Import photos to your computer and organize them
 into folders. Rename files systematically and back
 them up to avoid data loss."
          />
        </div>
      </div>
    </section>
  );
};

export default About;

const Card = ({
  image,
  title,
  content,
}: {
  image: string | StaticImport;
  title: string;
  content: string;
}) => {
  return (
    <div className="text-center max-w-[350px] mx-auto">
      <div className="relative inline-block mb-6">
        <div className="size-[100px] border border-[#9A9A9A] bg-gray-50 rounded-full flex items-center justify-center">
          <Image src={image} alt="icon" />
        </div>
        <div className="absolute bottom-2 right-2 w-3 h-3 bg-black rounded-full"></div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-[#5a5a5a] font-medium leading-relaxed">{content}</p>
    </div>
  );
};
