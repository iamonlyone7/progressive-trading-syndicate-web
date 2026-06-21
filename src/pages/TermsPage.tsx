import { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <div id="main-content" className="pt-24 min-h-screen bg-white">
        <section className="pts-section text-[#0d1f4f]">
          <div className="section-container max-w-3xl mx-auto px-6 md:px-12">
            <h1 className="text-4xl md:text-5xl font-serif font-light mb-6 tracking-tight text-[#0d1f4f]">
              Terms of Service
            </h1>
            <p className="text-sm text-[var(--text-mid)] mb-12">Last updated: June 2025</p>

            <div className="prose prose-gray max-w-none space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-3 text-[#0d1f4f]">Service Description</h2>
                <p className="text-[var(--text-mid)] leading-relaxed">
                  Progressive Trade Syndicate provides financial advisory, restructuring, and turnaround management services. Engagement terms are governed by a separate agreement tailored to each client's specific needs.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-[#0d1f4f]">No Guarantee of Results</h2>
                <p className="text-[var(--text-mid)] leading-relaxed">
                  While we apply rigorous methodologies and deep expertise, we do not guarantee specific financial outcomes. Past performance and case studies are illustrative and do not represent promised results.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-[#0d1f4f]">Confidentiality</h2>
                <p className="text-[var(--text-mid)] leading-relaxed">
                  All client information is treated as confidential and will not be disclosed without explicit consent, except as required by law.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-[#0d1f4f]">Limitation of Liability</h2>
                <p className="text-[var(--text-mid)] leading-relaxed">
                  Our liability is limited to the fees paid for the specific service giving rise to the claim. We are not liable for indirect, consequential, or incidental damages.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}