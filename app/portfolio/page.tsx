"use client";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React, { useState } from "react";
import wed1 from "@/public/shoot/wed-1.png";
import wed2 from "@/public/shoot/wed-2.png";
import wed3 from "@/public/shoot/wed-3.png";
import wed4 from "@/public/shoot/wed-4.png";
import wed5 from "@/public/shoot/wed-5.png";
import wed6 from "@/public/shoot/wed-6.png";
import wed7 from "@/public/shoot/wed-7.png";
import wed8 from "@/public/shoot/wed-8.png";
import wed10 from "@/public/shoot/wed-10.png";
import wed11 from "@/public/shoot/wed-11.png";
import wed12 from "@/public/shoot/wed-12.png";
import wed14 from "@/public/shoot/wed-14.png";
import bd1 from "@/public/shoot/bd-1.png";
import bd2 from "@/public/shoot/bg-2.png";
import bd3 from "@/public/shoot/bd-3.png";
import baby1 from "@/public/shoot/baby-1.png";
import baby3 from "@/public/shoot/baby-3.png";
import baby2 from "@/public/shoot/baby-2.png";
import fashion1 from "@/public/shoot/fashion1.png";
import fashion2 from "@/public/shoot/fashion2.png";
function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All" },
    { id: "wedding", label: "Wedding" },
    { id: "birthday", label: "Birthday" },
    { id: "fashion", label: "Fashion" },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      <Navbar color="black" />
      <div className=" px-[30px] sm:px-[40px] lg:px-[75px] mx-auto py-[100px] ">
        {/* Portfolio Section */}
        <section className="mb-20">
          <h2 className="text-5xl font-bold mb-4">OUR WORK</h2>
          <p className="text-[#5a5a5a] mb-8 text-lg">
            Each client is unique and so is each project while we have delivered
            many Photoshoot project and design projects, however we need to
            honor the confidentiality of our client. Here is a quick glimpse of
            our portfolio:
          </p>

          <div className="flex space-x-6 mb-12 border-b border-gray-200">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`pb-4 px-2 text-lg cursor-pointer transition-colors relative ${
                  activeFilter === filter.id
                    ? "text-black font-semibold after:absolute after:size-2 after:bg-[#F85D2E] after:bottom-2 after:left-1/2 after:-translate-x-1/2 after:rounded-full"
                    : "text-gray-500 hover:text-gray-800"
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {activeFilter == "all" && (
            <div className="flex flex-wrap">
              <div className="column">
                <div className="img-hover-zoom">
                  <Image src={wed2} alt="" />
                </div>
                <div className="img-hover-zoom">
                  <Image src={wed1} alt="" />
                </div>
                <div className="img-hover-zoom">
                  <Image src={wed6} alt="" />
                </div>
                <div className="img-hover-zoom">
                  <Image src={baby1} alt="" />
                </div>
              </div>

              <div className="column">
                <div className="img-hover-zoom">
                  <Image src={wed4} alt="" />
                </div>
                <div className="img-hover-zoom">
                  <Image src={wed5} alt="" />
                </div>
                <div className="img-hover-zoom">
                  <Image src={wed3} alt="" />
                </div>
                <div className="img-hover-zoom">
                  <Image src={bd2} alt="" />
                </div>
              </div>

              <div className="column">
                <div className="img-hover-zoom">
                  <Image src={wed8} alt="" />
                </div>
                <div className="img-hover-zoom">
                  <Image src={wed7} alt="" />
                </div>
                <div className="img-hover-zoom">
                  <Image src={bd1} alt="" />
                </div>
                <div className="img-hover-zoom">
                  <Image src={baby3} alt="" />
                </div>
              </div>

              <div className="column">
                <div className="img-hover-zoom">
                  <Image src={wed10} alt="" />
                </div>
                <div className="img-hover-zoom">
                  <Image src={wed11} alt="" />
                </div>
                <div className="img-hover-zoom">
                  <Image src={wed12} alt="" />
                </div>
                <div className="img-hover-zoom">
                  <Image src={baby2} alt="" />
                </div>
              </div>
            </div>
          )}

          {activeFilter == "wedding" && (
            <div className="flex flex-wrap">
              <div className="column">
                <div className="img-hover-zoom">
                  <Image src={wed10} alt="" />
                </div>
                <div className="img-hover-zoom">
                  <Image src={wed11} alt="" />
                </div>
                <div className="img-hover-zoom">
                  <Image src={wed12} alt="" />
                </div>
              </div>

              <div className="column">
                <div className="img-hover-zoom">
                  <Image src={wed2} alt="" />
                </div>
                <div className="img-hover-zoom">
                  <Image src={wed1} alt="" />
                </div>
                <div className="img-hover-zoom">
                  <Image src={wed6} alt="" />
                </div>
              </div>

              <div className="column">
                <div className="img-hover-zoom">
                  <Image src={wed4} alt="" />
                </div>
                <div className="img-hover-zoom">
                  <Image src={wed5} alt="" />
                </div>
                <div className="img-hover-zoom">
                  <Image src={wed3} alt="" />
                </div>
              </div>

              <div className="column">
                <div className="img-hover-zoom">
                  <Image src={wed8} alt="" />
                </div>
                <div className="img-hover-zoom">
                  <Image src={wed7} alt="" />
                </div>
                <div className="img-hover-zoom">
                  <Image src={wed14} alt="" />
                </div>
              </div>
            </div>
          )}

          {activeFilter == "birthday" && (
            <div className="flex flex-wrap">
              <div className="column">
                <div className="img-hover-zoom">
                  <Image src={bd1} alt="" />
                </div>
              </div>

              <div className="column">
                <div className="img-hover-zoom">
                  <Image src={baby3} alt="" />
                </div>

                <div className="img-hover-zoom">
                  <Image src={bd2} alt="" />
                </div>
              </div>

              <div className="column">
                <div className="img-hover-zoom">
                  <Image src={baby2} alt="" />
                </div>
              </div>

              <div className="column">
                <div className="img-hover-zoom">
                  <Image src={baby1} alt="" />
                </div>

                <div className="img-hover-zoom">
                  <Image src={bd3} alt="" />
                </div>
              </div>
            </div>
          )}

          {activeFilter == "fashion" && (
            <div className="flex flex-wrap">
              <div className="column">
                <div className="img-hover-zoom">
                  <Image src={fashion1} alt="" />
                </div>
              </div>

              <div className="column">
                <div className="img-hover-zoom">
                  <Image src={fashion2} alt="" />
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Portfolio;
