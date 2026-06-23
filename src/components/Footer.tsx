import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="pts-footer">
      <div className="footer-top">
        <div>
          <Link to="/" className="footer-logo">Progressive <strong>Trade</strong> Syndicate</Link>
          <p className="footer-tagline">Turning Financial Challenges into Growth Opportunities</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <div className="footer-col-title">Services</div>
            {['Financial Assessment','Working Capital','Trade Finance','Debt Restructuring','Cash Flow Management'].map((s,i)=>(
              <Link to="/#services" key={i}>{s}</Link>
            ))}
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Company</div>
            <Link to="/about">About Us</Link>
            <Link to="/#process">Our Process</Link>
            <Link to="/#why">Why Choose Us</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">© 2025 Progressive Trade Syndicate. All rights reserved.</p>
        <p className="footer-reg">PROGRESSIVE TRADE SYNDICATE — FINANCIAL TURNAROUND SPECIALISTS</p>
      </div>
    </footer>
  );
}
