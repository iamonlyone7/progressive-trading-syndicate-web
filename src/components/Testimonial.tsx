export default function Testimonial() {
  return (
    <section id="testimonial" className="pts-section">
      <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
        <div className="section-eyebrow-line"></div>
        <span className="section-eyebrow-text">Client Perspective</span>
        <div className="section-eyebrow-line" style={{ transform: 'scaleX(-1)' }}></div>
      </div>
      <blockquote className="testimonial-quote reveal">
        "Progressive Trade Syndicate didn't just advise us — they stood alongside us through every difficult negotiation and restructuring decision. Eighteen months later, we're profitable, debt-light, and expanding."
      </blockquote>
      <p className="testimonial-attr reveal reveal-delay-1">
        Director, Export Trading House <span>— Mumbai, Maharashtra</span>
      </p>
    </section>
  );
}
