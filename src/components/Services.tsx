import { SERVICES } from "../data/constants";
import { Icon } from "./icons";

export default function Services() {
  return (
    <section id="services" className="pts-section">
      <div className="services-header reveal">
        <div>
          <div className="section-eyebrow">
            <div className="section-eyebrow-line"></div>
            <span className="section-eyebrow-text">What We Do</span>
          </div>
          <h2 className="section-h2">Our <em>Core</em><br />Services</h2>
        </div>
        <p className="services-header-right">
          Eight integrated financial disciplines, delivered through a single relationship. No complexity, no friction.
        </p>
      </div>
      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <div className={'service-card reveal' + (i % 4 !== 0 ? ' reveal-delay-' + (i % 4) : '')} key={i}>
            <span className="service-num">{s.num}</span>
            <span className="service-icon">
              <Icon name={s.icon} size={28} />
            </span>
            <div className="service-title">{s.title}</div>
            <div className="service-desc text-[#0d1f4f]">{s.desc}</div>
            <a href="#cta" className="service-link">Learn more →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
