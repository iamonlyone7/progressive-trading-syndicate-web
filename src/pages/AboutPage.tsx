import { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { AuroraBackground } from "../components/ui/aurora-background";
import { MoveRight } from "lucide-react";

export default function AboutPage() {
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
    <div id="pts-root">
      <SmoothCursor />
      <Nav />
      <div id="main-content">
      
      {/* About Hero */}
      <section id="about-hero" className="pts-section relative overflow-hidden">
        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <div className="section-eyebrow reveal">
            <div className="section-eyebrow-line"></div>
            <span className="section-eyebrow-text">Our Identity</span>
          </div>
          
          <h1 className="section-h2 reveal reveal-delay-1" style={{ fontSize: 'clamp(44px, 6vw, 84px)', marginBottom: '40px' }}>
            More than advisors. <br/>
            <em>Architects of Resilience.</em>
          </h1>
          
          <div className="reveal reveal-delay-2 about-hero-grid">
            <div>
              <p className="body-text" style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-dark)', marginBottom: 0 }}>
                Founded on the belief that financial distress is not a destination, but a juncture. We exist to guide businesses through the narrow passages of uncertainty, restructuring their foundation for sustained, long-term growth.
              </p>
            </div>
            <div>
              <p className="body-text" style={{ color: 'var(--muted)', lineHeight: '1.8', marginBottom: '24px' }}>
                Our approach blends surgical financial precision with an uncompromising commitment to strategic vision. We have navigated the complexities of corporate restructuring across 50+ industries, constantly finding value where others see only liability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="pts-section" style={{ background: 'var(--black)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="section-eyebrow reveal">
            <div className="section-eyebrow-line"></div>
            <span className="section-eyebrow-text">Leadership</span>
          </div>

          <div className="about-leadership-grid">
            {[
              { name: "Anil R. Mehta", title: "Managing Partner & Founder", bio: "Former Chief Risk Officer with two decades of executing complex cross-border restructurings.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=800" },
              { name: "Sarah K. Desai", title: "Head of Asset Management", bio: "Specialist in non-performing assets recovery and sustainable portfolio growth strategies.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=800" },
              { name: "Marcus Thorne", title: "Director, Trade Finance", bio: "Expert in supply chain liquidity, unlocking working capital across complex global networks.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=800" }
            ].map((leader, i) => (
              <div key={i} className={`reveal reveal-delay-${(i % 4) + 1}`}>
                <div style={{ aspectRatio: '3/4', marginBottom: '24px', overflow: 'hidden', background: 'var(--deep)' }}>
                  <img src={leader.img} alt={leader.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="filter grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '4px' }}>{leader.name}</h3>
                <p style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: '700', color: 'var(--blue-mid)', marginBottom: '16px' }}>{leader.title}</p>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.6' }}>{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="pts-section" style={{ background: 'var(--deep)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
           <div className="about-values-grid">
              <div className="reveal">
                <h2 className="section-h2" style={{ marginBottom: '24px' }}>Built on unwavering principles.</h2>
                <p className="body-text" style={{ color: 'var(--muted)', lineHeight: '1.8' }}>
                  We don't believe in standard playbooks. Every turnaround is unique, but our foundational principles remain absolute.
                </p>
              </div>
              <div className="about-values-inner-grid">
                 {[
                   { title: "Radical Transparency", desc: "No sugar-coating. We deliver precise, objective insights about your financial reality, no matter how difficult the conversation." },
                   { title: "Aggressive Advocacy", desc: "When representing your interests in creditor negotiations, we bring relentless determination to secure optimal terms." },
                   { title: "Strategic Precision", desc: "We deploy capital and restructure debt with surgical exactness, minimizing dilution and maximizing operational leverage." },
                   { title: "Long-Term Viability", desc: "We don't engineer short-term fixes. We build structures designed to endure market cycles and stress tests." }
                 ].map((val, i) => (
                   <div key={i} className={`reveal reveal-delay-${(i % 2) + 1}`}>
                     <div style={{ width: '32px', height: '2px', background: 'var(--blue-mid)', marginBottom: '24px' }}></div>
                     <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-dark)' }}>{val.title}</h4>
                     <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: '1.7' }}>{val.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pts-section relative overflow-hidden" style={{ textAlign: 'center', background: 'var(--black)', borderTop: '1px solid var(--border-soft)' }}>
        <div className="relative z-10" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 className="section-h2 reveal" style={{ marginBottom: '32px' }}>Discuss Your Scenario</h2>
          <p className="body-text reveal" style={{ color: 'var(--muted)', marginBottom: '40px' }}>Confidentiality is our bedrock. Speak with a senior partner to explore strategic pathways forward.</p>
          <a href="/#cta" className="btn-primary reveal" style={{ display: 'inline-flex' }}>
            <span>Contact A Partner</span><span><MoveRight size={16} /></span>
          </a>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
}
