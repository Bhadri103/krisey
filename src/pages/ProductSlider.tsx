import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, Shield, Star, Users, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import HomeProducts from "../components/HomeProducts";
import AnimatedSection from "../components/AnimatedSection"; 
import banner1 from '../components/images/productbanner/productslider2.avif'
import banner2 from '../components/images/productbanner/productslider2.png'
import banner3 from '../components/images/productbanner/productslider2.webp'
/* ─────────────────────────────────────────────
   DATA  (Updated to showcase Products instead of General Construction)
───────────────────────────────────────────── */
const homeSlides = [
  {
    // Premium Wall Plaster / Putty image
    image:banner3,
    title: "Next-Gen Wall Care Solutions",
    description: "Premium plasters, putties, and tile adhesives engineered for flawless finishes and enduring strength.",
    accent: "#dc2626", // Krisey Red
    tag: "Premium Finish",
  },
  {
    // High-quality Aggregates / Sand image
    image: banner1,
    title: "High-Grade Building Aggregates",
    description: "Sourcing the finest M-Sand, P-Sand, and gravels to ensure the structural integrity of your projects.",
    accent: "#eab308", // Yellow accent
    tag: "Core Materials",
  },
  {
    // Waterproofing / Damp Proofing image
    image:banner2,
    title: "Advanced Damp-Proofing",
    description: "Protect your structures with Dr. Proof and Matrix bonding solutions, backed by scientific research.",
    accent: "#2563eb", // Blue accent
    tag: "Lifetime Protection",
  },
];

const features = [
  {
    icon: Shield,
    title: "Scientifically Formulated",
    description: "Developed in partnership with McGlasgo Research Centre for unmatched material performance.",
  },
  {
    icon: Star,
    title: "Uncompromising Quality",
    description: "Rigorous lab testing ensures every bag of plaster and aggregate meets the highest industry standards.",
  },
  {
    icon: Users,
    title: "Trusted by Builders",
    description: "The preferred choice for thousands of residential and commercial projects across South India.",
  },
];

/* ─────────────────────────────────────────────
   SLIDE LAYER
───────────────────────────────────────────── */
/* ─────────────────────────────────────────────
   SLIDE LAYER
───────────────────────────────────────────── */
function SlideLayer({ slide, isActive }: { slide: any, isActive: boolean }) {
  return (
    <div style={{ position: "absolute", inset: 0 }}>
      
      {/* THIS WAS MISSING: The actual background image */}
      <img 
        src={slide.image} 
        alt={slide.title} 
        style={{ 
          position: "absolute", 
          inset: 0, 
          width: "100%", 
          height: "100%", 
          objectFit: "cover",
          zIndex: 0
        }} 
      />

      {/* Dark overlay gradients */}
      <div
        style={{
          position: "absolute", inset: 0, zIndex: 1,
          background:
            "linear-gradient(105deg, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.42) 55%, rgba(0,0,0,0.10) 100%), linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)",
        }}
      />
      
      {/* Accent color glow */}
      <div
        style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: `radial-gradient(ellipse 55% 70% at 0% 60%, ${slide.accent}22 0%, transparent 60%)`,
        }}
      />

      {/* Slide Content */}
      {isActive && (
        <div
          style={{
            position: "absolute", inset: 0, zIndex: 2,
            display: "flex", flexDirection: "column", justifyContent: "center",
            padding: "80px clamp(12px, 8vw, 120px)",
            maxWidth: 800,
          }}
        >
          {/* Tag */}
          <div
            className="slide-tag"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: `${slide.accent}33`,
              border: `1px solid ${slide.accent}88`,
              borderRadius: 100, padding: "5px 16px",
              marginBottom: 24, width: "fit-content",
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: slide.accent, flexShrink: 0 }} />
            <span
              style={{
                fontFamily: "'Outfit', sans-serif", fontWeight: 500,
                fontSize: "0.73rem", letterSpacing: "0.14em",
                textTransform: "uppercase", color: "#fff",
              }}
            >
              {slide.tag}
            </span>
          </div>

          {/* Title */}
          <h1
            className="slide-title"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 5.5vw, 4.2rem)",
              fontWeight: 700, color: "#fff",
              lineHeight: 1.1, letterSpacing: "-0.5px",
              marginBottom: 20,
              textShadow: "0 2px 30px rgba(0,0,0,0.4)",
            }}
          >
            {slide.title}
          </h1>

          {/* Description */}
          <p
            className="slide-desc"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(0.95rem, 1.8vw, 1.12rem)",
              color: "rgba(255,255,255,0.72)", fontWeight: 300,
              lineHeight: 1.75, marginBottom: 36, maxWidth: 500,
            }}
          >
            {slide.description}
          </p> 
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   HERO SLIDER
───────────────────────────────────────────── */
function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState<number | null>(null);
  const [dir, setDir]         = useState(1);
  const [animating, setAnimating] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef  = useRef<any>(null);
  const progRef   = useRef<any>(null);
  const DURATION  = 5000;

  const go = useCallback((next: number, direction = 1) => {
    if (animating || next === current) return;
    setDir(direction);
    setPrev(current);
    setAnimating(true);
    setCurrent(next);
    setProgress(0);
    setTimeout(() => { setPrev(null); setAnimating(false); }, 900);
  }, [animating, current]);

  const goNext = useCallback(() => go((current + 1) % homeSlides.length, 1),  [go, current]);
  const goPrev = useCallback(() => go((current - 1 + homeSlides.length) % homeSlides.length, -1), [go, current]);

  useEffect(() => {
    if (!playing) { clearInterval(timerRef.current); return; }
    timerRef.current = setInterval(goNext, DURATION);
    return () => clearInterval(timerRef.current);
  }, [playing, goNext]);

  useEffect(() => {
    setProgress(0);
    if (!playing) return;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      setProgress(Math.min((elapsed / DURATION) * 100, 100));
      if (elapsed < DURATION) progRef.current = requestAnimationFrame(tick);
    };
    progRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(progRef.current);
  }, [current, playing]);

  const slide = homeSlides[current];

  return (
   <div style={{ position: "relative", height: "80vh", overflow: "hidden", background: "#0a0a0a" }}>
      {/* Exiting slide */}
      {prev !== null && (
        <div
          className={dir === 1 ? "slide-exit-left" : "slide-exit-right"}
          style={{ position: "absolute", inset: 0, zIndex: 1 }}
        >
          <SlideLayer slide={homeSlides[prev]} isActive={false} />
        </div>
      )}

      {/* Active slide */}
      <div
        key={current}
        className={animating ? (dir === 1 ? "slide-enter-right" : "slide-enter-left") : ""}
        style={{ position: "absolute", inset: 0, zIndex: 2 }}
      >
        <SlideLayer slide={slide} isActive={true} />
      </div>

     

      {/* Arrows */}
      {[
        { onClick: goPrev, label: "Previous", icon: ChevronLeft, left: 6, right: "auto" },
        { onClick: goNext, label: "Next",     icon: ChevronRight, left: "auto", right: 6 },
      ].map(({ onClick, label, icon: Icon, left, right }) => (
        <button
          key={label}
          onClick={onClick}
          aria-label={label}
          style={{
            position: "absolute", left, right, top: "50%",
            transform: "translateY(-50%)", zIndex: 10,
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.22)", borderRadius: "50%",
            width: 35, height: 35, display: "flex",
            alignItems: "center", justifyContent: "center",
            cursor: "pointer", color: "#fff",
            backdropFilter: "blur(6px)",
            transition: "background .2s, transform .2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.25)"; e.currentTarget.style.transform = "translateY(-50%) scale(1.08)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.transform = "translateY(-50%) scale(1)"; }}
        >
          <Icon size={22} />
        </button>
      ))} 

      
    </div>
  );
}

/* ─────────────────────────────────────────────
   HOME
───────────────────────────────────────────── */
const Home = () => {
  return (
    <>
      <div style={{ fontFamily: "'Outfit', sans-serif", background: "#ffffff",   }}> 
        <HeroSlider />  
      </div>
    </>
  );
};

export default Home;