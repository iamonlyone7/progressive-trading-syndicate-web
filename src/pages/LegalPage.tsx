import { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

const criminalServices = [
  {
    name: "Initial Consultation",
    price: "Free",
    desc: "A thorough review of your case, legal rights, and potential defense strategies."
  },
  {
    name: "Bail Applications",
    price: "$1,500 - $3,000",
    desc: "Preparation and representation for bail hearings to secure your release pending trial."
  },
  {
    name: "Summary Conviction Offenses",
    price: "From $2,500",
    desc: "Defense for less serious criminal matters, including minor theft and simple assault."
  },
  {
    name: "Indictable Offenses",
    price: "From $5,000",
    desc: "Comprehensive defense for serious charges, requiring extensive preparation and trial work."
  },
  {
    name: "DUI & Traffic Offenses",
    price: "From $3,500",
    desc: "Specialized representation for impaired driving and serious traffic-related charges."
  },
  {
    name: "Criminal Appeals",
    price: "From $7,500",
    desc: "Reviewing trial records and arguing for overturned convictions or reduced sentences."
  }
];

export default function LegalPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <div className="pt-24 min-h-screen bg-white">
        <section className="pts-section text-[#0d1f4f]">
          <div className="section-container max-w-5xl mx-auto px-6 md:px-12">
            <h1 className="text-4xl md:text-6xl font-medium mb-6 tracking-tight text-[#0d1f4f]">
              Criminal Defense Pricing
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 mb-20 leading-relaxed max-w-2xl">
              We provide transparent, flat-fee billing for most criminal matters. 
              Our team understands the stakes and is dedicated to protecting your rights with uncompromising defense strategies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {criminalServices.map((service, idx) => (
                <div key={idx} className="flex flex-col border-t border-zinc-200 pt-6 group">
                  <h3 className="text-xl font-medium text-[#0d1f4f] mb-2">{service.name}</h3>
                  <div className="text-3xl font-light text-[#0d1f4f] mb-4 tracking-tight">{service.price}</div>
                  <p className="text-base text-zinc-600 leading-relaxed group-hover:text-zinc-900 transition-colors duration-300">{service.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-24 pt-12 border-t border-zinc-200">
              <h3 className="text-lg font-medium text-[#0d1f4f] mb-3">Note on Billing Arrangements</h3>
              <p className="text-base text-zinc-600 leading-relaxed max-w-3xl">
                The prices listed above are estimates for typical cases. Every case is unique. Complex matters involving multiple charges, extensive evidence, or prolonged trials may require custom billing. We provide a detailed, totally transparent fee agreement before any work begins.
              </p>
            </div>
          </div>
        </section>
      </div>
      <CTA />
      <Footer />
    </>
  );
}
