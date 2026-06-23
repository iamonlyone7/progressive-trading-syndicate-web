import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Nav() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const getHashLink = (hash: string) => isHome ? hash : `/${hash}`;

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX }}
      />
      <nav id="pts-nav" className={`${navScrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''} ${isHome && !navScrolled && !mobileMenuOpen ? 'home-top' : ''}`}>
      <Link to="/" className="nav-logo">
        <div className="nav-logo-mark"><div className="nav-logo-mark-inner"></div></div>
        PTS
      </Link>
      
      <button 
        className="mobile-menu-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} color="var(--blue-hero)" /> : <Menu size={24} color={isHome && !navScrolled ? "#ffffff" : "var(--text-dark)"} />}
      </button>

      <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
        <Link to="/about">About</Link>
        <div className="nav-dropdown-wrapper">
          <a href={getHashLink("#services")}>Services</a>
          <div className="nav-dropdown">
            <a href={getHashLink("#corporate")}>Corporate Restructuring</a>
            <a href={getHashLink("#asset")}>Asset Management</a>
            <a href={getHashLink("#trade")}>Trade Finance</a>
            <Link to="/legal">Legal Services</Link>
          </div>
        </div>
        <a href={getHashLink("#process")}>Process</a>
        <a href={getHashLink("#why")}>Why Us</a>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact" className="nav-cta">Contact Us</Link>
      </div>
      </nav>
    </>
  );
}
