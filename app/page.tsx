import About from "@/components/about";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import ShootCategory from "@/components/shoot-category";
import Testimonial from "@/components/testimonial";

export default async function Home() {
  return (
    <section className="space-y-10">
      <Navbar />
      <Header />
      <About />
      <ShootCategory />
      <Testimonial />
    </section>
  );
}
