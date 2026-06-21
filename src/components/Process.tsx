import { PROCESS } from "../data/constants";

export default function Process() {
  return (
    <section id="process" className="pts-section">
      <div className="process-intro reveal">
        <div className="section-eyebrow">
          <div className="section-eyebrow-line"></div>
          <span className="section-eyebrow-text">How It Works</span>
        </div>
        <h2 className="section-h2">A Structured Path to <em>Recovery</em></h2>
        <p style={{ color: '#0d1f4f', fontSize: '16px', lineHeight: 1.7, marginTop: '16px' }}>
          Our four-stage engagement model delivers clarity and confidence from first conversation to sustained growth.
        </p>
      </div>
      <div className="process-steps">
        {PROCESS.map((p, i) => (
          <div className={'process-step reveal' + (i > 0 ? ' reveal-delay-' + i : '')} key={i}>
            <div className="process-step-num">{p.num}</div>
            <div className="process-step-title">{p.title}</div>
            <div className="process-step-desc text-[#0d1f4f]">{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
