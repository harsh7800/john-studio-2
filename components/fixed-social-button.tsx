"use client";
import React from "react";
import youtube from "@/public/youtube.svg";
import twitter from "@/public/twitter.svg";
import whatsapp from "@/public/whatsapp.svg";
import facebook from "@/public/facebook.svg";
import Image from "next/image";
import { useProfile } from "./profile-wrapper";
import Link from "next/link";

const FixedSocialButton = () => {
  const {
    profile: { phone },
  } = useProfile();
  return (
    <div className="fixed z-[9000] bg-white right-0 bottom-1/2 border border-black flex flex-col gap-3 py-4 px-2 rounded-l-[25px]">
      <Link href={`https://wa.me/${phone}`} target="_blank">
        <Image width={25} height={25} src={whatsapp} alt="icon" />
      </Link>
      <Image width={25} height={25} src={facebook} alt="icon" />
      <Image width={25} height={25} src={youtube} alt="icon" />
      <Image width={25} height={25} src={twitter} alt="icon" />
    </div>
  );
};

export default FixedSocialButton;
