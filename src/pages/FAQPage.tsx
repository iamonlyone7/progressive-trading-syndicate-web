import { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import { AccordionVariant } from "../components/AccordionVariant";

export default function FAQPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <div className="pt-32 pb-24 min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-serif font-light mb-6 tracking-tight text-[var(--blue-hero)]">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-mid)] mb-16 leading-relaxed max-w-2xl font-sans">
            Clear, transparent answers to common inquiries regarding our corporate restructuring and turnaround processes.
          </p>

          <AccordionVariant />
        </div>
      </div>
      <CTA />
      <Footer />
    </>
  );
}
