import { useEffect, useState } from "react";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import Loader from "../components/Loader";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import About from "../components/About";
import Services from "../components/Services";
import Process from "../components/Process";
import WhyUs from "../components/WhyUs";
import Testimonial from "../components/Testimonial";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function HomePage() {
  const [loaderOut, setLoaderOut] = useState(false);

  // Loader
  useEffect(() => {
    const t = setTimeout(() => setLoaderOut(true), 1500);
    return () => clearTimeout(t);
  }, []);

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [loaderOut]);

  return (
    <div id="pts-root">
      <SmoothCursor />
      <div id="main-content">
      <Loader loaderOut={loaderOut} />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Process />
      <WhyUs />
      <Testimonial />
      <CTA />
      <Footer />
      </div>
    </div>
  );
}
