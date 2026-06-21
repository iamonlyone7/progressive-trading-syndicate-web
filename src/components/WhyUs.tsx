import { WHY_ITEMS } from "../data/constants";

export default function WhyUs() {
  return (
    <section id="why" className="pts-section">
      <div className="why-left reveal">
        <div className="section-eyebrow">
          <div className="section-eyebrow-line"></div>
          <span className="section-eyebrow-text">The PTS Advantage</span>
        </div>
        <h2 className="section-h2">Why Businesses<br />Choose <em>Us</em></h2>
        <p>
          Financial distress demands speed, precision, and a partner who has navigated these waters before. We bring all three — with a network and depth of expertise that delivers results when they matter most.
        </p>
        <div className="why-big-stat">
          {[['15','+',' Years Experience'],['50','+',' Industries Served'],['₹500','Cr',' Avg Annual Capital Facilitated']].map(([n,s,l],i)=>(
            <div className="why-stat-block" key={i}>
              <div className="why-stat-num">{n}<span>{s}</span></div>
              <div className="why-stat-label">{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="why-right reveal reveal-delay-2">
        {WHY_ITEMS.map((w, i) => (
          <div className="why-item" key={i}>
            <div className="why-item-check">✓</div>
            <div>
              <div className="why-item-title">{w.title}</div>
              <div className="why-item-desc text-[#0d1f4f]">{w.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
