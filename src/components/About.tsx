import { ABOUT_CARDS } from "../data/constants";

export default function About() {
  return (
    <section id="about" className="pts-section">
      <div className="about-left reveal">
        <div className="section-eyebrow">
          <div className="section-eyebrow-line"></div>
          <span className="section-eyebrow-text">Who We Are</span>
        </div>
        <div className="big-quote text-[#0d1f4f]">
          "Your single-window partner for every financial challenge — from crisis to opportunity."
        </div>
        <p className="body-text text-[#0d1f4f]">
          At Progressive Trade Syndicate, we understand that financial distress doesn't announce itself. We begin with a thorough assessment of your financial position, identifying key challenges and hidden opportunities. Then we build customized strategies that deliver measurable results — not just recommendations.
        </p>
        <div className="gold-divider"></div>
        <p className="body-text text-[#0d1f4f]" style={{ fontSize: '14px' }}>
          Our expertise spans strategic financial planning, working capital optimization, trade finance, supplier credit management, and business growth advisory.
        </p>
      </div>
      <div className="about-right">
        {ABOUT_CARDS.map((c, i) => (
          <div className={'about-card reveal reveal-delay-' + (i + 1)} key={i}>
            <div className="about-card-icon">{c.icon}</div>
            <div>
              <div className="about-card-title">{c.title}</div>
              <div className="about-card-text">{c.text}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
