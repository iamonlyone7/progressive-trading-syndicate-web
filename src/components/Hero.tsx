import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current && containerRef.current) {
        gsap.to(contentRef.current, {
          yPercent: 30, // Move down slightly as user scrolls down for parallax
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative overflow-hidden min-h-[100svh]">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center min-h-[100svh] px-[24px] md:px-[48px] w-full pb-20">
        <div className="hero-content" ref={contentRef}>
          <h1 className="hero-h1 !text-white">
            <span className="line"><span>Turning Financial</span></span>
            <span className="line"><span><em className="!text-blue-300">Challenges</em> Into</span></span>
            <span className="line"><span>Growth.</span></span>
          </h1>
          <p className="hero-sub !text-white/80" style={{ position: 'relative', zIndex: 10 }}>
            Comprehensive financial turnaround solutions — from working capital optimization to debt restructuring — all under one roof.
          </p>
          <div className="hero-actions" style={{ position: 'relative', zIndex: 10 }}>
            <a href="#cta" className="btn-primary !border-white hover:!bg-white hover:!text-black"><span>Start Your Turnaround</span><span>→</span></a>
            <a href="#services" className="btn-ghost !text-white hover:!text-blue-200">Explore Services <span className="btn-arrow">↓</span></a>
          </div>
        </div>
        <div className="hero-stats !text-white">
          <div className="hero-stat">
            <span className="hero-stat-num !text-white">500<span className="!text-blue-300">+</span></span>
            <span className="hero-stat-label !text-white/70">Businesses Served</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num !text-white">₹2K<span className="!text-blue-300">Cr+</span></span>
            <span className="hero-stat-label !text-white/70">Capital Facilitated</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-num !text-white">98<span className="!text-blue-300">%</span></span>
            <span className="hero-stat-label !text-white/70">Client Retention</span>
          </div>
        </div>

      </div>
    </section>
  );
}
