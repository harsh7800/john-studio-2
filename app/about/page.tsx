import Navbar from "@/components/navbar";
import React from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import signature from "@/public/signature.svg";
import Link from "next/link";
import thread from "@/public/long-string.svg";
import photo1 from "@/public/photo1.png";
import shadows from "@/public/shadows.svg";
import about_wed_1 from "@/public/about-wed-1.png";
import about_wed_2 from "@/public/about-wed-2.png";
import photo_shoot from "@/public/photo_shoot.png";
import excellence_icon from "@/public/excellence.svg";
import service_icon from "@/public/service_icon.svg";
import art_icon from "@/public/art_icon.svg";
import environment_icon from "@/public/environment_icon.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import pink_baby from "@/public/pink-baby.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const About = () => {
  return (
    <div>
      <Navbar className="sticky left-0 translate-x-0" color="black" />

      <header className="relative flex flex-col justify-center space-y-5 pl-10 lg:pl-20 h-[507px] bg-[url(/about-banner.png)]">
        <h1 className="relative text-white z-10 text-5xl font-semibold uppercase">
          About
        </h1>
        <p className="relative z-10 w-full lg:max-w-5xl text-white text-[22px]">
          At John studio, we believe in the magic of capturing life’s most
          precious moments. Specializing in wedding, birthday, newborn, and
          model photoshoots, our team is dedicated to transforming your
          unforgettable moments into beautiful, lasting memories
        </p>
      </header>

      <div className="pl-[30px] sm:pl-[45px] lg:pl-[75px] flex justify-between flex-col-reverse xl:flex-row mt-10">
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

          <p className="text-gray-600 mb-8 text-[16px] max-w-3xl leading-relaxed">
            We specialize in capturing life&aos;s most precious moments with
            artistic precision and creative excellence. Our team of professional
            photographers brings years of experience and a passionate eye for
            detail to every shoot, ensuring your memories are preserved in
            stunning clarity.
          </p>

          <div className="max-w-xs flex flex-col items-start gap-4">
            <Image src={signature} alt="signature" />
            <Link
              href="tel:+919999999999"
              className="inline-flex items-center justify-center py-0 font-semibold text-[16px] rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              +91 99999 99999
            </Link>
          </div>
        </div>
        <div className="hidden xl:flex relative w-fit pr-20 items-start gap-5">
          <Card className="relative z-20 shadow-lg p-0 pb-16 w-[342px] flex items-center justify-start rounded-none">
            <CardHeader>
              <CardTitle className="p-0 sr-only">Card Title</CardTitle>
              <CardDescription className="p-0 sr-only">
                Card Description
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Image src={photo1} className="object-cover" alt="photo 1" />
            </CardContent>
          </Card>

          <Card className="relative z-10 rotate-30 shadow-lg p-0 pb-16 w-[302px] flex items-center px-6 mt-14 justify-start rounded-none">
            <CardHeader>
              <CardTitle className="p-0 sr-only">Card Title</CardTitle>
              <CardDescription className="p-0 sr-only">
                Card Description
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Image src={photo1} className="object-cover" alt="photo 1" />
            </CardContent>
          </Card>

          <Image
            src={thread}
            alt="thread"
            className="absolute top-0 left-0 xl:-left-1/4"
          />
        </div>
      </div>

      <div className="flex relative items-center justify-center sm:justify-start gap-6 lg:gap-[150px] xl:gap-[240px] sm:pl-10 lg:pl-20 my-20 flex-wrap">
        <div>
          <h3 className="text-[25px] font-semibold text-center">10+</h3>
          <p className="text-[16px] font-semibold">Years of Experience</p>
        </div>
        <div>
          <h3 className="text-[25px] font-semibold text-center">100+</h3>
          <p className="text-[16px] font-semibold">Projects Completed</p>
        </div>
        <div>
          <h3 className="text-[25px] font-semibold text-center">50+</h3>
          <p className="text-[16px] font-semibold">Satisfied Customer</p>
        </div>
        <Image
          src={shadows}
          alt="shadows"
          className="absolute right-0 lg:-right-5"
        />
      </div>

      {/* //What Can We Do Section */}
      <div className="px-10 lg:px-20">
        <div className="text-center mb-16 ">
          <p className="text-xs font-semibold uppercase tracking-wider mb-2">
            Design & Photography
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            What can we Do
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-18 h-[1px] bg-black"></div>
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <div className="w-18 h-[1px] bg-black"></div>
          </div>
        </div>

        <div className="flex justify-between items-start gap-14 flex-col lg:flex-row">
          <div className="flex relative w-[65%] items-start -space-x-10">
            <Card className="relative z-20 shadow-lg p-0 pb-16 w-fit px-4 flex items-center justify-start rounded-none">
              <CardHeader>
                <CardTitle className="p-0 sr-only">Card Title</CardTitle>
                <CardDescription className="p-0 sr-only">
                  Card Description
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Image
                  src={about_wed_2}
                  className="object-cover"
                  alt="photo 1"
                />
              </CardContent>
            </Card>

            <Card className="relative z-50 rotate-5 shadow-lg p-0 pb-14 w-fit flex items-center px-2 mt-10 justify-start rounded-none">
              <CardHeader>
                <CardTitle className="p-0 sr-only">Card Title</CardTitle>
                <CardDescription className="p-0 sr-only">
                  Card Description
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <Image
                  src={about_wed_1}
                  className="-rotate-5 object-cover"
                  alt="photo 1"
                />
              </CardContent>
            </Card>
          </div>
          <div className=" w-full space-y-4">
            <h3 className="font-bold text-[25px]">Wedding Photography</h3>
            <div className="space-y-8 text-lg">
              <p>
                Capture Your Love Story: Your wedding day is one of the most
                important days of your life, and we are here to capture every
                beautiful moment. From candid shots to posed portraits, our
                experienced photographers ensure that every smile, tear, and
                joyous celebration is immortalized.
              </p>
              <p>
                Engagement Sessions: Celebrate your engagement with a romantic
                photoshoot that showcases your unique love story. Our
                photographers will work with you to create stunning images that
                you will cherish forever.
              </p>
              <p>
                Pre-Wedding and Post-Wedding Shoots: Document your journey from
                engagement to honeymoon with our comprehensive pre-wedding and
                post-wedding photoshoots.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse gap-5 min-[1200px]:flex-row px-10 lg:px-20 py-10 w-full justify-between">
        <div className="space-y-6 max-w-4xl w-full">
          <div className="space-y-4">
            <h3 className="font-bold text-[25px]">Birthday Photography</h3>
            <p className="text-[16px]">
              Milestone Moments: Whether it’s a first birthday, a sweet sixteen,
              or a golden jubilee, John studio captures the joy and excitement
              of your special day. Our photographers specialize in creating fun
              and memorable images that reflect the spirit of the celebration.
            </p>
            <p className="text-[16px]">
              Themed Photoshoots: Bring your birthday party theme to life with
              our creative and vibrant photography. From superheroes to
              fairytales, we make sure every detail is captured perfectly.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-[25px]">Newborn Photography</h3>
            <p className="text-[16px]">
              Welcome to the World: Celebrate the arrival of your little one
              with our tender and heartwarming newborn photoshoots. Our
              photographers are skilled in capturing the innocence and beauty of
              newborns, providing you with timeless images to treasure forever
            </p>
            <p className="text-[16px]">
              Family Portraits: Include the whole family in your newborn
              photoshoot to create beautiful portraits that capture the joy and
              love of your growing family.
            </p>
          </div>
        </div>
        <Image
          src={pink_baby}
          alt="pink_bg_baby"
          className="w-[400px] aspect-video z-30 object-cover"
        />
      </div>

      <div className="flex flex-col gap-5 min-[1200px]:flex-row px-10 lg:px-20 py-10 w-full justify-between">
        <Image
          src={photo_shoot}
          alt="pink_bg_baby"
          className="w-[526px] aspect-video z-30 object-cover"
        />
        <div className="space-y-6 max-w-4xl w-full">
          <div className="space-y-4">
            <h3 className="font-bold text-[25px]">Model Photoshoot</h3>
            <p className="text-[16px]">
              Portfolio Building: Whether you&apos;re an aspiring model or a
              seasoned professional, John studio offers comprehensive model
              photoshoots to help you build a stunning portfolio.
            </p>
            <p className="text-[16px]">
              Fashion and Glamour: Step into the spotlight with our high-fashion
              and glamour photoshoots. Our creative team ensures you look your
              best, providing you with striking images that stand
            </p>
            <p className="text-[16px]">
              Our photographers work with you to highlight your unique style and
              personality.
            </p>
          </div>
        </div>
      </div>

      {/* //Why Choose John Studio Section */}
      <div className="text-center mb-16 ">
        <p className="text-xs font-semibold uppercase tracking-wider mb-2">
          Design & Photography
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Why Choose John Studio
        </h2>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="w-18 h-[1px] bg-black"></div>
          <div className="w-2 h-2 bg-black rounded-full"></div>
          <div className="w-18 h-[1px] bg-black"></div>
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-5">
        <PerksCard
          image={excellence_icon}
          title="Professional Excellence"
          content="Our team of skilled photographers 
and editors are passionate about 
their craft, ensuring you receive the
 highest quality images."
        />
        <PerksCard
          image={service_icon}
          title="Personalized Service"
          content="We take the time to understand your
 vision and preferences, tailoring our
 services to meet  your  specific needs."
        />
        <PerksCard
          image={art_icon}
          title="State-of-the-Art Equipment"
          content="Using the latest photography
 equipment and techniques, we 
deliver stunning images that exceed
 your expectations."
        />
        <PerksCard
          image={environment_icon}
          title="Comfortable Environment"
          content="Our studio provides a warm and 
welcoming atmosphere where you 
can relax and enjoy your photoshoot
 experience."
        />
      </div>

      <div className="w-full h-[408px] my-10 space-y-5 bg-[url(/yellow_banner.png)] flex items-start pl-20 flex-col justify-center">
        <h1 className="relative z-10 text-2xl font-bold uppercase">
          Book Your Session Today!
        </h1>
        <p className="relative z-10 max-w-4xl font-semibold text-[16px] leading-8">
          At John studio, we believe in the magic of capturing life’s most
          precious moments. Specializing in wedding, birthday, newborn, and
          model photoshoots, our team is dedicated to transforming your
          unforgettable moments into beautiful, lasting memories
        </p>
        <button
          type="submit"
          className="w-fit bg-black text-white py-3 px-7 rounded-sm hover:bg-gray-800 transition"
        >
          +91 99999 99999
        </button>
      </div>
    </div>
  );
};

export default About;

const PerksCard = ({
  image,
  title,
  content,
}: {
  image: string | StaticImport;
  title: string;
  content: string;
}) => {
  return (
    <div className="border-3 rounded-t-full px-5 pt-20 pb-10 border-dashed max-w-[350px] flex items-center justify-start flex-col gap-2">
      <Image src={image} alt="excellence_icon" />
      <h2 className="font-semibold text-[18px] text-black">{title}</h2>
      <p className="text-[14px] text-center font-semibold">{content}</p>
    </div>
  );
};
