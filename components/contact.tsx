import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { PiFacebookLogo } from "react-icons/pi";
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
          <FaInstagram color="#fff" size={24} />
        </Link>
        <Link href={""}>
          <PiFacebookLogo color="#fff" size={28} />
        </Link>
        <Link href={""}>
          <FaWhatsapp color="#fff" size={24} />
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
