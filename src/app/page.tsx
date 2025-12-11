import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Screenshots from "@/components/Screenshots";
import DemoVideo from "@/components/DemoVideo";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-purple-100 selection:text-primary">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Screenshots />
      <DemoVideo />
      <Pricing />
      <Testimonial />
      <FAQ />
      <CallToAction />
      <Footer />
    </main>
  );
}
