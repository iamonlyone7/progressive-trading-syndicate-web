import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section id="cta" className="pts-section">
      <div className="cta-glow"></div>
      <div className="section-eyebrow reveal" style={{ justifyContent: 'center' }}>
        <div className="section-eyebrow-line"></div>
        <span className="section-eyebrow-text">Begin Today</span>
        <div className="section-eyebrow-line" style={{ transform: 'scaleX(-1)' }}></div>
      </div>
      <h2 className="section-h2 reveal" style={{ position: 'relative', zIndex: 1 }}>
        Ready to Reclaim<br />Financial <em>Control?</em>
      </h2>
      <p className="reveal reveal-delay-1" style={{ position: 'relative', zIndex: 1 }}>
        Let's start with a confidential assessment of your position. No obligation. No jargon. Just a clear view of your options.
      </p>
      <div className="cta-buttons reveal reveal-delay-2">
        <Link to="/contact" className="btn-primary">
          <span>Request a Free Assessment</span><span>→</span>
        </Link>
        <a href="tel:+919999999999" className="cta-btn-ghost">Call Us Now ↗</a>
      </div>
      <div className="cta-contact-info reveal reveal-delay-3">
        {[['Email','info@progressivetradesyndicate.com'],['Location','Mumbai, Maharashtra, India'],['Response Time','Within 24 Hours']].map(([l,v],i)=>(
          <div className="cta-contact-item" key={i}>
            <span className="cta-contact-label">{l}</span>
            <span className="cta-contact-val">{v}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
