import { MARQUEE_ITEMS } from "../data/constants";

export default function Marquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div className="marquee-item" key={i}>
            <span className="marquee-dot"></span>{item}
          </div>
        ))}
      </div>
    </div>
  );
}
