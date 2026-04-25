import React, { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, Shield, Star, Users, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import HomeProducts from "../components/HomeProducts";
import AnimatedSection from "../components/AnimatedSection"; 
import img1 from '../images/banner/img1.jpg';
import img2 from '../images/banner/img2.jpg';
import img3 from '../images/banner/img3.jpg';

/* ─────────────────────────────────────────────
   DATA  (Hero Slider content strictly unchanged)
───────────────────────────────────────────── */
const homeSlides = [
  {
    image: img1,
    title: "Building Strong Foundations for Tomorrow",
    description: "Delivering high-quality construction solutions with precision and durability",
    accent: "#dc2626",
    tag: "Trusted Builders",
  },
  {
    image: img2,
    title: "Modern Construction Expertise",
    description: "Combining innovation, technology, and skilled craftsmanship in every project",
    accent: "#b45309",
    tag: "Expert Engineers",
  },
  {
    image: img3,
    title: "Reliable & On-Time Delivery",
    description: "Successfully completing residential and commercial projects across regions",
    accent: "#26006d",
    tag: "Proven Results",
  },
];

/* Updated to reflect general construction features */
const features = [
  {
    icon: Shield,
    title: "Uncompromising Safety",
    description: "Adhering to the highest industry safety protocols to protect our crews and your investment.",
  },
  {
    icon: Star,
    title: "Structural Excellence",
    description: "Utilizing top-grade materials and expert craftsmanship to ensure enduring, resilient builds.",
  },
  {
    icon: Users,
    title: "Client-Collaborative",
    description: "Working closely with you from blueprint to handover to ensure your vision is perfectly realized.",
  },
];

/* ─────────────────────────────────────────────
   SLIDE LAYER
───────────────────────────────────────────── */
function SlideLayer({ slide, isActive }) {
  return (
    <div style={{ position: "absolute", inset: 0 }}>
          {/* ✅ IMAGE (IMPORTANT) */}
      <img
        src={slide.image}
        alt="slide"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute", inset: 0,
          background:
            "linear-gradient(105deg, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.42) 55%, rgba(0,0,0,0.10) 100%), linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)",
        }}
      />
      <div
        style={{
          position: "absolute", inset: 0,
          background: `radial-gradient(ellipse 55% 70% at 0% 60%, ${slide.accent}22 0%, transparent 60%)`,
        }}
      />

      {isActive && (
        <div
          style={{
            position: "absolute", inset: 0,
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

          {/* CTAs */}
          <div className="slide-cta" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "13px 30px",
                background: slide.accent, color: "#fff",
                border: "none", borderRadius: 10,
                fontFamily: "'Outfit', sans-serif", fontWeight: 600,
                fontSize: "0.92rem", cursor: "pointer",
                boxShadow: `0 8px 30px ${slide.accent}55`,
                transition: "transform .2s, box-shadow .2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; }}
            >
              Explore Projects <ArrowRight size={17} />
            </button>
            <button
              style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "13px 28px",
                background: "rgba(255,255,255,0.1)", color: "#fff",
                border: "1px solid rgba(255,255,255,0.25)", borderRadius: 10,
                fontFamily: "'Outfit', sans-serif", fontWeight: 500,
                fontSize: "0.92rem", cursor: "pointer",
                backdropFilter: "blur(8px)", transition: "background .2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.2)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
            >
              Get an Estimate
            </button>
          </div>
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
  const [prev, setPrev]       = useState(null);
  const [dir, setDir]         = useState(1);
  const [animating, setAnimating] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef  = useRef(null);
  const progRef   = useRef(null);
  const DURATION  = 5000;

  const go = useCallback((next, direction = 1) => {
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
    <div style={{ position: "relative", height: "min(92vh, 760px)", overflow: "hidden", background: "#0a0a0a" }}>
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

      {/* Thumbnail rail */}
      <div
        style={{
          position: "absolute", right: 28, top: "50%",
          transform: "translateY(-50%)", zIndex: 10,
          display: "flex", flexDirection: "column", gap: 10,
        }}
      >
        {homeSlides.map((s, i) => (
          <div
            key={i}
            onClick={() => go(i, i > current ? 1 : -1)}
            style={{
              width: i === current ? 54 : 42,
              height: i === current ? 38 : 30,
              borderRadius: 7, overflow: "hidden",
              border: i === current ? "2px solid #fff" : "2px solid rgba(255,255,255,0.2)",
              opacity: i === current ? 1 : 0.5,
              boxShadow: i === current ? "0 0 0 3px rgba(255,255,255,0.15)" : "none",
              transition: "all .3s ease", cursor: "pointer",
            }}
          >
            <img src={s.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        ))}
      </div>

      {/* Arrows */}
      {[
        { onClick: goPrev, label: "Previous", icon: ChevronLeft, left: 24, right: "auto" },
        { onClick: goNext, label: "Next",     icon: ChevronRight, left: "auto", right: 90 },
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
            width: 25, height: 25, display: "flex",
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

      {/* Play/pause */}
      <button
        onClick={() => setPlaying(p => !p)}
        style={{
          position: "absolute", bottom: 28, right: 28, zIndex: 10,
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50%",
          width: 36, height: 36, display: "flex",
          alignItems: "center", justifyContent: "center",
          cursor: "pointer", color: "#fff",
          backdropFilter: "blur(6px)", transition: "background .2s",
        }}
        onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.25)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; }}
      >
        {playing ? <Pause size={14} /> : <Play size={14} />}
      </button>

      {/* Progress dots */}
      <div
        style={{
          position: "absolute", bottom: 28, left: "50%",
          transform: "translateX(-50%)", zIndex: 10,
          display: "flex", alignItems: "center", gap: 8,
        }}
      >
        {homeSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i, i > current ? 1 : -1)}
            style={{
              width: i === current ? 32 : 8, height: 8,
              borderRadius: 4, padding: 0,
              background: i === current ? "#fff" : "rgba(255,255,255,0.35)",
              border: "none", cursor: "pointer",
              position: "relative", overflow: "hidden",
              transition: "width .35s cubic-bezier(.22,.68,0,1.2), background .25s",
            }}
          >
            {i === current && (
              <span
                style={{
                  position: "absolute", left: 0, top: 0,
                  height: "100%", width: `${progress}%`,
                  background: "rgba(255,255,255,0.5)",
                  borderRadius: 4, transition: "width .1s linear",
                }}
              />
            )}
          </button>
        ))}
      </div> 
    </div>
  );
}

/* ─────────────────────────────────────────────
   HOME
───────────────────────────────────────────── */
const Home = () => {
  return (
    <>
       

      <div style={{ fontFamily: "'Outfit', sans-serif", background: "#ffffff", minHeight: "100vh" }}> 
        <HeroSlider />   
        <div style={{ padding: "60px 12px 80px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <HomeProducts />
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;