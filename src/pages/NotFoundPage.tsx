import { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function NotFoundPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <div id="main-content" className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-6 max-w-lg">
          <div className="w-20 h-20 border-2 border-[var(--blue-mid)] flex items-center justify-center mx-auto mb-8">
            <span className="text-3xl font-serif text-[var(--blue-mid)]">?</span>
          </div>
          <h1 className="font-serif text-6xl md:text-7xl font-light text-[var(--blue-hero)] mb-4">404</h1>
          <p className="text-xl text-[var(--text-mid)] mb-2">Page not found</p>
          <p className="text-[var(--text-soft)] mb-10 leading-relaxed">
            The page you are looking for has been moved, restructured, or does not exist.
          </p>
          <Link to="/" className="btn-primary">
            <span>Return Home</span><span>→</span>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}