"use client";
import { Camera } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import shoot_icon from "@/public/shoot_icon.svg";
import camera_icon from "@/public/camera_tripod_icon.svg";
import edit_icon from "@/public/image_icon.svg";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { useProfile } from "./profile-wrapper";
import { createClient } from "@/app/utils/supabase/client";
import { useRouter } from "next/navigation";

const About = () => {
  const [heroImage, setHeroImage] = useState("");

  useEffect(() => {
    const fetchHeroImage = async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("hero-image")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      console.log("data: ", data);
      if (!error && data) {
        setHeroImage(data.image_url);
      }
    };

    fetchHeroImage();
  }, []);
  const {
    profile: { phone, experience },
  } = useProfile();

  const router = useRouter();
  return (
    <section className="min-h-screen px-[30px] sm:px-[40px] lg:px-[75px] ">
      {/* About Section 1 */}
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-10 items-center">
        <div className="w-full lg:max-w-3xl">
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <Camera />
            <span className="text-xs uppercase font-semibold tracking-wider">
              Design & Photo Studio
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About M Capture Studio
          </h1>

          <p className="text-gray-600 mb-8  leading-relaxed">
            Welcome to M Capture Studio, where every frame tells a story! With{" "}
            {experience} years of experience, we specialize in capturing life’s
            most cherished moments with creativity and precision.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            From weddings to portfolio shoots, corporate events, and cover song
            productions, we bring a unique touch to every project. Whether it’s
            an indoor studio session or an outdoor adventure, we ensure each
            shot reflects your vision beautifully.
          </p>
          <p className="text-[#F85D2E] mb-8 leading-relaxed">
            At M Capture Studio, photography isn’t just about pictures—it’s
            about memories that last a lifetime. Let’s create something
            extraordinary together!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size={"lg"}
              onClick={() => router.push("/portfolio")}
              className="bg-black text-white px-8 h-14 text-[20px] rounded-sm hover:bg-gray-800 transition-colors"
            >
              Discover More
            </Button>
            <Link
              href="tel:+919000777981"
              className="inline-flex items-center justify-center px-8 py-0 font-semibold text-[20px] border border-gray-300  text-gray-700 hover:bg-gray-50 transition-colors h-14 rounded-sm"
            >
              +91 {phone}
            </Link>
          </div>
        </div>

        {heroImage && (
          <Image
            width={400}
            height={200}
            src={heroImage}
            alt="about image"
            className=" object-cover"
          />
        )}
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
