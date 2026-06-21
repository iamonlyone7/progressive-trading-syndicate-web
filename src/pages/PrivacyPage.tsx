import { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-sm text-[var(--text-mid)] mb-12">Last updated: June 2025</p>

            <div className="prose prose-gray max-w-none space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-3 text-[#0d1f4f]">Information We Collect</h2>
                <p className="text-[var(--text-mid)] leading-relaxed">
                  We collect information you provide directly, including your name, email address, company name, and any details you share about your financial situation. We also collect standard web analytics data such as page views and browser information.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-[#0d1f4f]">How We Use Your Information</h2>
                <p className="text-[var(--text-mid)] leading-relaxed">
                  Your information is used solely to evaluate your inquiry, communicate with you about our services, and improve our website. We do not sell, rent, or share your personal data with third parties for their marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-[#0d1f4f]">Confidentiality</h2>
                <p className="text-[var(--text-mid)] leading-relaxed">
                  All financial information shared during consultations is protected by strict confidentiality agreements. We maintain industry-standard security measures to protect your data.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-[#0d1f4f]">Contact</h2>
                <p className="text-[var(--text-mid)] leading-relaxed">
                  For questions about this policy, contact us at info@progressivetradesyndicate.com.
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