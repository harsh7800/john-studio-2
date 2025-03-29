import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";
import Contact from "@/components/contact";
import { Toaster } from "sonner";
import ProfileWrapper from "@/components/profile-wrapper";

const newsReader = Newsreader({
  variable: "--font-news-reader",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "M Capture Studio",
  description: "Studio that focuses on photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${newsReader.className} antialiased`}>
        <ProfileWrapper>
          <main className="mx-auto min-w-[300px] relative ">
            {/* <FixedSocialButton /> */}
            {children}
            <Toaster position="top-center" richColors />
            <Contact />
          </main>
        </ProfileWrapper>
      </body>
    </html>
  );
}
