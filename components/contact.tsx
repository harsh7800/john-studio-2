import Link from "next/link";
import insta from "@/public/insta.svg";
import facebook from "@/public/facebook.svg";
import whatsapp from "@/public/whatsapp.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="w-full bg-black/90 text-white pt-16 space-y-6">
      <h1 className="text-3xl font-semibold text-white capitalize text-center">
        m capture studio
      </h1>
      <p className="text-center max-w-3xl text-gray-400 mx-auto">
        {" "}
        Capturing life&apos;s precious moments with artistic vision and
        technical excellence. We specialize in portraits, weddings, and
        commercial photography.
      </p>

      <div className="flex justify-center items-center gap-4">
        <Link href={""}>
          <Image
            src={insta}
            className="bg-white rounded-full"
            alt="icon"
            width={25}
            height={25}
          />
        </Link>
        <Link href={""}>
          <Image
            src={whatsapp}
            className="bg-white rounded-full"
            alt="icon"
            width={25}
            height={25}
          />
        </Link>
        <Link href={""}>
          <Image
            src={facebook}
            className="bg-white rounded-full"
            alt="icon"
            width={25}
            height={25}
          />
        </Link>
      </div>
      <div className="bg-black h-14 flex justify-center items-center mt-16 ">
        <span>
          All Copyrights Reserved @2025 by{" "}
          <Link className="text-gray-400 font-semibold" href={"/"}>
            M Capture Studio
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
