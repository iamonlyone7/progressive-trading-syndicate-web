import { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const services = [
  {
    num: "01",
    title: "Debt Resolution & Creditor Negotiations",
    desc: "Legal restructuring of obligations, forbearance agreements, and covenant waivers to stabilize operations and protect stakeholder value.",
  },
  {
    num: "02",
    title: "Insolvency & Bankruptcy Advisory",
    desc: "Strategic guidance through insolvency proceedings, including pre-packaged solutions and voluntary arrangements for corporate entities.",
  },
  {
    num: "03",
    title: "Contract & Trade Law",
    desc: "Drafting and review of trade finance agreements, supply chain contracts, and cross-border commercial arrangements.",
  },
  {
    num: "04",
    title: "Regulatory Compliance Review",
    desc: "Ensuring alignment with financial regulations, corporate governance requirements, and statutory filing obligations.",
  },
  {
    num: "05",
    title: "Dispute Resolution & Litigation",
    desc: "Representation in commercial disputes, arbitration proceedings, and regulatory tribunals with a focus on swift, cost-effective outcomes.",
  },
  {
    num: "06",
    title: "Corporate Governance Advisory",
    desc: "Board structuring, fiduciary duty compliance, and governance framework design for privately held and publicly listed entities.",
  },
];

export default function LegalPage() {
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
              <span className="section-eyebrow-text">Legal Practice</span>
            </div>
            <h1 className="section-h2 reveal reveal-delay-1" style={{ fontSize: 'clamp(44px, 6vw, 84px)', marginBottom: '40px' }}>
              Legal architecture
              <br />
              <em>for recovery</em>
            </h1>
            <div className="reveal reveal-delay-2 about-hero-grid">
              <div>
                <p className="body-text" style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: 0 }}>
                  A focused legal practice built around financial restructuring, insolvency, and commercial law — no distractions, no unrelated departments, no overhead passed to clients.
                </p>
              </div>
              <div>
                <p className="body-text" style={{ color: 'var(--text-mid)', lineHeight: '1.8', marginBottom: '24px' }}>
                  Our team provides strategic legal counsel across six key disciplines, working in close coordination with our financial advisory practice to deliver integrated turnaround solutions.
                </p>
                <a href="#services" className="btn-primary" style={{ display: 'inline-flex' }}>
                  <span>Explore Services</span><span>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="pts-section" style={{ background: 'var(--black)' }}>
          <div className="services-header reveal">
            <div>
              <div className="section-eyebrow">
                <div className="section-eyebrow-line"></div>
                <span className="section-eyebrow-text">Practice Areas</span>
              </div>
              <h2 className="section-h2">Six disciplines,<br /><em>one focus.</em></h2>
            </div>
            <p className="services-header-right">
              Every area of financial law we cover is directly tied to corporate turnaround and recovery. No unrelated departments, no diluted expertise.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className={'service-card reveal' + (i % 4 !== 0 ? ' reveal-delay-' + (i % 4) : '')} key={i}>
                <span className="service-num">{s.num}</span>
                <div className="service-title">{s.title}</div>
                <div className="service-desc" style={{ color: 'var(--text-dark)' }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Creed */}
        <section className="pts-section" style={{ background: 'var(--deep)', textAlign: 'center' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div className="section-eyebrow reveal" style={{ justifyContent: 'center' }}>
              <div className="section-eyebrow-line"></div>
              <span className="section-eyebrow-text">Our Creed</span>
              <div className="section-eyebrow-line" style={{ transform: 'scaleX(-1)' }}></div>
            </div>
            <h2 className="section-h2 reveal">Four things we<br /><em>do differently</em></h2>
            <div style={{ textAlign: 'left', marginTop: '48px' }}>
              {[
                "We never advise outside our domain — our legal practice is built exclusively around financial restructuring and corporate recovery.",
                "Every engagement begins with a fixed-fee discovery phase so you understand the full scope before committing to a larger retainer.",
                "Our partners are accessible. No account managers, no deflection — direct access to the lawyer handling your matter.",
                "We litigate only when necessary. Where possible, we resolve through negotiation, arbitration, or structured settlement.",
              ].map((p, i) => (
                <div key={i} className={'reveal' + (i > 0 ? ' reveal-delay-' + i : '')} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '20px 0', borderBottom: i < 3 ? '1px solid var(--border-soft)' : 'none' }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: 'var(--gold-dim)', letterSpacing: '0.1em', whiteSpace: 'nowrap', minWidth: '28px' }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{ fontSize: '15px', color: 'var(--text-dark)', lineHeight: '1.7' }}>
                    {p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="pts-section" style={{ background: 'var(--blue-hero)', textAlign: 'center' }}>
          <div className="cta-glow"></div>
          <div className="section-eyebrow reveal" style={{ justifyContent: 'center' }}>
            <div className="section-eyebrow-line" style={{ background: 'var(--blue-sky)' }}></div>
            <span className="section-eyebrow-text" style={{ color: 'var(--blue-sky)' }}>Get Started</span>
            <div className="section-eyebrow-line" style={{ transform: 'scaleX(-1)', background: 'var(--blue-sky)' }}></div>
          </div>
          <h2 className="section-h2 reveal" style={{ color: '#ffffff' }}>
            Confidential consultation,<br /><em style={{ color: 'var(--blue-sky)' }}>zero obligation</em>
          </h2>
          <p className="reveal reveal-delay-1" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '480px', margin: '0 auto 48px', fontSize: '16px', lineHeight: '1.7' }}>
            We begin every relationship with a candid conversation about your situation. No pitch. No pressure. Just a clear assessment of your options.
          </p>
          <div className="cta-buttons reveal reveal-delay-2">
            <a href="/contact" className="btn-primary" style={{ background: 'var(--blue-sky)', display: 'inline-flex' }}>
              <span>Book a Consultation</span><span>→</span>
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}