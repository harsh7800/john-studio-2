"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Loader, Send } from "lucide-react";
import contact from "@/public/contact-us.png";
import Image from "next/image";
import Navbar from "@/components/navbar";
import { toast } from "sonner";
import { useProfile } from "@/components/profile-wrapper";
type FormData = {
  name: string;
  email: string;
  service: string;
  phoneNo: number;
  budget: string;
  message: string;
};

const services = [
  "Wedding Photography",
  "Fashion Photography",
  "Baby Photography",
  "Birthday Photography",
  "Event Photography",
  "Corporate Photography",
  "Other",
];

const budgets = [
  "Less than Rs 5,000",
  "Rs 5,000 - Rs 20,000",
  "Rs 50,000 - Rs 100,000",
  "Rs100,000+",
];

function Contact() {
  const {
    profile: { email },
  } = useProfile();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data, // Spread form data so it's not nested
          ownerEmail: email, // Send owner email separately
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="border-b pb-10">
      <Navbar color="black" />
      <div className="w-full flex justify-between  items-center mt-[150px] px-[30px] sm:px-[40px] lg:px-[75px] ">
        <div className="w-full lg:max-w-xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-2">
            LET&apos;S TALK
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Tell us about your project and let&apos;s create something amazing
            together.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
            <div className="w-full">
              <label
                htmlFor="name"
                className="text-[16px] font-semibold text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
              {errors.name && (
                <p className="mt-1 text-[16px] text-red-600 font-semibold">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-[16px] font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
              {errors.email && (
                <p className="mt-1 text-[16px] font-semibold text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-[16px] font-semibold text-gray-700"
              >
                Phone No.
              </label>
              <input
                type="number"
                {...register("phoneNo", {
                  required: "phoneNo is required",
                })}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              {errors.email && (
                <p className="mt-1 text-[16px] font-semibold text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="service"
                className="text-[16px] font-semibold text-gray-700"
              >
                What service are you interested in?
              </label>
              <select
                {...register("service", {
                  required: "Please select a service",
                })}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              >
                <option value="">Select service type</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.service.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="budget"
                className="text-[16px] font-semibold text-gray-700"
              >
                Budget
              </label>
              <select
                {...register("budget", {
                  required: "Please select a budget range",
                })}
                className="mt-1 text-[16px] font-semibold w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              >
                <option value="">Select project budget</option>
                {budgets.map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
              {errors.budget && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.budget.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-[16px] font-semibold text-gray-700"
              >
                Message
              </label>
              <textarea
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
                rows={4}
                className="mt-1 text-[16px] font-semibold w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center items-center gap-2 rounded-md bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              {isSubmitting ? (
                <Loader className="animate-spin" size={18} />
              ) : (
                "Submit"
              )}
              {!isSubmitting && <Send size={16} />}
            </button>
          </form>
        </div>

        <Image
          className="w-[346px] object-cover hidden lg:block"
          src={contact}
          alt="Photographer with camera"
        />
      </div>
    </div>
  );
}

export default Contact;
