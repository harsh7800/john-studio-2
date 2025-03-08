"use client";
import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import youtube from "@/public/youtube.svg";
import twitter from "@/public/twitter.svg";
import whatsapp from "@/public/whatsapp.svg";
import facebook from "@/public/facebook.svg";
import Image from "next/image";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full bg-white mt-10  px-[30px] sm:px-[40px] lg:px-[75px]">
      <div className="flex flex-wrap items-start gap-[100px]">
        {/* Contact Form Section */}

        <div className="w-full max-w-[400px]">
          <h1 className="text-6xl font-bold mb-8">Stay Wild!</h1>
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <div>
              <label
                htmlFor="fullName"
                className="text-[16px] font-semibold text-[#5a5a5a] mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full border-gray-300 border rounded-sm px-3 py-2 focus:outline-none focus:border-black"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="text-[16px] font-semibold text-[#5a5a5a] mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                className="w-full border-gray-300 border rounded-sm px-3 py-2 focus:outline-none focus:border-black"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 border-gray-300 rounded"
                checked={formData.agreeToTerms}
                onChange={(e) =>
                  setFormData({ ...formData, agreeToTerms: e.target.checked })
                }
              />
              <label htmlFor="terms" className="ml-2 text-[16px] font-semibold">
                I agree with Privacy Policy and Terms of Use
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-sm hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex flex-wrap items-start gap-[100px]">
          {/* Products list */}
          <div>
            <h2 className="font-bold text-[16px] mb-4">Products</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-semibold hover:text-black"
                >
                  Mug Printing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-semibold hover:text-black"
                >
                  T-shirt Printing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-semibold hover:text-black"
                >
                  Photo Frames
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-semibold hover:text-black"
                >
                  Gifts
                </a>
              </li>
            </ul>
          </div>

          {/* Studio List */}
          <div>
            <h2 className="font-bold text-[16px] mb-4">Studio</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-semibold hover:text-black"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-semibold hover:text-black"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 font-semibold hover:text-black"
                >
                  Portfolio
                </a>
              </li>
            </ul>

            {/* Contact Information */}
          </div>

          <div className="md:col-span-1">
            <h2 className="font-bold text-[16px] mb-4">Get In Touch</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-1" />
                <p className="text-gray-600 font-semibold">
                  2715 Ash Dr, San Jose, South Dakota 83475
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <p className="text-gray-600 font-semibold">+91 9441519708</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <p className="text-gray-600 font-semibold">
                  Johnstudio@gmail.com
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="font-medium mb-4">Follow Us</h2>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-600 font-semibold hover:text-black"
                >
                  <Image src={whatsapp} alt="Youtube" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 font-semibold hover:text-black"
                >
                  <Image src={twitter} alt="Youtube" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 font-semibold hover:text-black"
                >
                  <Image src={youtube} alt="Youtube" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 font-semibold hover:text-black"
                >
                  <Image src={facebook} alt="Youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Navigation Sections */}
      </div>

      <footer className="mt-16 py-8 border-t border-gray-200">
        <p className="text-sm font-semibold text-gray-600">
          ©2024 All Copyrights Reserved
        </p>
      </footer>
    </div>
  );
}

export default Contact;
