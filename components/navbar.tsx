"use client";
import React, { useEffect, useState } from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = ({
  color = "white",
  className,
}: {
  color?: "white" | "black";
  className?: string;
}) => {
  const path = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled more than 50 pixels
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "max-w-[1700px] py-4 w-full flex justify-between items-center fixed top-0 left-[50%] -translate-x-1/2 px-[30px] sm:px-[40px] lg:px-[75px] z-50 bg-transparent transition-colors duration-300",
        isScrolled && "bg-white shadow-md shadow-[#FF4C001A]", // Add bg-white class if scrolled
        className
      )}
    >
      <Link href="/" className="">
        <Image
          className="size-[45px] sm:size-[60px] mx-auto"
          width={60}
          height={60}
          src={logo}
          alt="logo"
        />
        <h3 className="text-center font-extrabold text-[12px] sm:text-[16px] uppercase">
          m capture studio
        </h3>
      </Link>
      <div
        className={cn(
          "hidden min-[1200px]:flex items-center gap-10 text-[20px] font-semibold text-white",
          color === "black" && "text-black",
          isScrolled && "text-black" // Change text color to black if scrolled
        )}
      >
        <Link
          href={"/"}
          className={cn(
            "hover:text-[#F85D2E] transition-all",
            path === "/" && "text-[#F85D2E] relative"
          )}
        >
          Home
        </Link>
        <Link
          href={"/about"}
          className={cn(
            "hover:text-[#F85D2E] transition-all",
            path === "/about" && "text-[#F85D2E] relative"
          )}
        >
          About
        </Link>
        <Link
          href="/portfolio"
          className={cn(
            "hover:text-[#F85D2E] transition-all",
            path === "/portfolio" && "text-[#F85D2E] relative"
          )}
        >
          Portfolio
        </Link>
        <Link
          href={"/contact"}
          className={cn(
            "hover:text-[#F85D2E] transition-all",
            path === "/contact" && "text-[#F85D2E] relative"
          )}
        >
          Contact
        </Link>
      </div>

      <Sheet>
        <SheetTrigger className="hidden max-[1200px]:block text-[#F85D2E]">
          <Menu />
        </SheetTrigger>
        <SheetContent className="border-0">
          <SheetHeader>
            <SheetTitle>
              <div>
                <Image
                  className="size-[45px] sm:size-[60px] mx-auto"
                  width={60}
                  height={60}
                  src={logo}
                  alt="logo"
                />
                <h3 className="text-center font-extrabold text-[12px] sm:text-[16px] uppercase">
                  m capture studio
                </h3>
              </div>
            </SheetTitle>
            <SheetDescription className="sr-only">
              account and remove your data from our servers.
            </SheetDescription>

            <nav className="flex flex-col items-center gap-10 pt-10 px-5">
              <Link
                href={"/"}
                className={cn(
                  "font-semibold text-[22px] relative hover:text-[#F85D2E] transition-all",
                  path === "/" && "text-[#F85D2E] relative"
                )}
              >
                Home
              </Link>
              <Link
                href={"/about"}
                className={cn(
                  "font-semibold text-[22px] relative hover:text-[#F85D2E] transition-all",
                  path === "/about" && "text-[#F85D2E] relative"
                )}
              >
                About
              </Link>
              <Link
                href={"/portfolio"}
                className={cn(
                  "font-semibold text-[22px] relative hover:text-[#F85D2E] transition-all",
                  path === "/portfolio" && "text-[#F85D2E] relative"
                )}
              >
                Portfolio
              </Link>
              <Link
                href={"/contact"}
                className={cn(
                  "font-semibold text-[22px] relative hover:text-[#F85D2E] transition-all",
                  path === "/contact" && "text-[#F85D2E] relative"
                )}
              >
                Contact
              </Link>
            </nav>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
