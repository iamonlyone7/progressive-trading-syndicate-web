import { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { AccordionVariant } from "../components/AccordionVariant";

export default function FAQPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <div id="main-content">
        {/* Hero */}
        <section id="about-hero" className="pts-section" style={{ background: 'var(--deep)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="section-eyebrow reveal">
              <div className="section-eyebrow-line"></div>
              <span className="section-eyebrow-text">FAQ</span>
            </div>
            <h1 className="section-h2 reveal reveal-delay-1" style={{ fontSize: 'clamp(44px, 6vw, 84px)', marginBottom: '40px' }}>
              Clarity in<br /><em>Complexity.</em>
            </h1>
            <div className="reveal reveal-delay-2 about-hero-grid">
              <div>
                <p className="body-text" style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: 0 }}>
                  Clear, transparent answers to common inquiries regarding our corporate restructuring and turnaround processes.
                </p>
              </div>
              <div>
                <p className="body-text" style={{ color: 'var(--text-mid)', lineHeight: '1.8' }}>
                  Every question we receive comes from real business owners navigating financial complexity. If you don't see your question here, reach out directly — we respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Accordion */}
        <section className="pts-section" style={{ background: 'var(--black)' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <AccordionVariant />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}