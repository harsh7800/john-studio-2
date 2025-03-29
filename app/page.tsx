import About from "@/components/about";
import FullscreenHero from "@/components/header";
import Navbar from "@/components/navbar";
import ShootCategory from "@/components/shoot-category";
import Testimonial from "@/components/testimonial";

export default async function Home() {
  return (
    <section className="space-y-10">
      <Navbar />
      <FullscreenHero />
      <About />
      <ShootCategory />
      <Testimonial />
    </section>
  );
}
