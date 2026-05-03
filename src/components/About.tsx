import React, { useEffect, ReactNode } from "react";
import {
  Eye,
  Target,
  Zap,
  Phone,
  Globe,
  Mail,
  Briefcase,
  GraduationCap,
  Heart,
  MapPin,
  ExternalLink,
} from "lucide-react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) => (
  <div
    className={`animate-fade-in ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </div>
);

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight * 0.75) {
          el.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const roles = [
    { title: "CEO", org: "Aigle International Pte Ltd", location: "Singapore" },
    { title: "CEO", org: "Global Rainmakers Pte Ltd", location: "Singapore" },
    { title: "Partner", org: "Vinisha Constructions Pvt Ltd", location: "India" },
    { title: "MD", org: "Star Tech", location: "India" },
    { title: "Director", org: "Ecoester Pvt Ltd", location: "India" },
  ];

  const pastExperience = [
    {
      title: "CEO – Kaveri Mudali Mines & Minerals",
      location: "Tamil Nadu",
      desc: "Took over a mine near Thali in Krishnagiri Dst, employing close to 500 workers with extensive knowledge in mines.",
    },
    {
      title: "South Zonal Director",
      location: "Tamil Nadu",
      desc: "Managed and operated 27 mines, dealt with 30+ minerals, managing close to 800 employees under the only Loading Operator of Tamil Nadu.",
    },
    {
      title: "CEO – Vishal Mines",
      location: "Kerala",
      desc: "Operated bauxite mines out of Kerala in parallel to sand, turning it into a core expertise area.",
    },
  ];

  const presentExperience = [
    {
      title: "CEO – Aigle International",
      location: "Singapore",
      desc: "Expanded internationally dealing with trades and government projects across global markets.",
    },
    {
      title: "Director / Shareholder – Vinisha Constructions",
      location: "Mumbai, India",
      desc: "Creating upscale communities, providing a new definition of luxury through development and re-development projects.",
    },
    {
      title: "MD – Startech",
      location: "India",
      desc: "Designed and implemented a proprietary manufacturing process for Dry Mix Mortar.",
    },
    {
      title: "Director – Ecoester",
      location: "India",
      desc: "Technical head and strategist in waste management processes.",
    },
  ];

  const hobbies = ["Networking", "Analyzing New Opportunities", "Pets & Animals", "Learning New Ideas"];

  const education = [
    { degree: "BBM – IS", institution: "PSG Arts & Science, Coimbatore", year: "2007" },
    { degree: "MSc – Animal Behavior", institution: "AVC College, Mayiladuthurai", year: "2011" },
  ];

  return (
    <div className="bg-white">

      {/* ── Origin Story ── */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-[#E63946]">Krisey</span>
            </h2>
            <p className="text-xl text-gray-600">The Legacy Behind Krisey: A Story of Grit and Growth</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-on-scroll">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-tl-3xl opacity-20"></div>
                <img
                  src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                  alt="Historical Mettupalayam Market"
                  className="w-full h-96 object-cover rounded-lg shadow-xl relative z-10"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-500 rounded-br-3xl opacity-20"></div>
              </div>
            </div>
            <div className="animate-on-scroll" style={{ transitionDelay: "0.2s" }}>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                Long before Coimbatore—one of India's foremost industrial hubs—emerged as a center for construction-oriented manufacturing, the roots of Krisey were quietly taking shape. The story traces back to the late 1960s and 1970s in Mettupalayam, a historically rich town near Coimbatore.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                It was here that a determined individual, with no formal education or support system, began his journey by trading vegetables in the local market. This remarkable man made the bold transition from agriculture to bulk trading, gradually earning a reputation for integrity, courage, and unwavering hard work.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll order-2 lg:order-1">
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                Fueled by deep faith, sincerity, and a tireless spirit, he overcame every challenge—despite lacking financial resources, academic credentials, or powerful connections. He stood strong, like a rock amidst a raging sea.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                What started as a modest trading venture eventually became the foundation of KKM—an identity forged through resilience, principles, and perseverance. Today, that legacy has grown into a cutting-edge research and development center, driving innovation in the construction materials industry.
              </p>
              <div className="bg-gradient-to-r from-red-500 to-yellow-500 p-6 rounded-lg text-white">
                <p className="text-lg font-medium">
                  The same indomitable spirit that empowered <strong>K.K. Mathan, the Legend</strong>, now propels the growth of Krisey, inspiring advancements in manufacturing and modern construction technologies.
                </p>
              </div>
            </div>
            <div className="animate-on-scroll order-1 lg:order-2">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2"
                  alt="K.K. Mathan Legacy"
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">K.K. Mathan</h3>
                  <p className="text-lg opacity-90">The Visionary Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Vision & Mission</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 shadow-xl flex flex-col h-full transition-transform transform hover:scale-[1.02]">
                <Eye className="w-12 h-12 text-red-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  We aim to be the foremost leader in India's construction materials sector by upholding a relentless dedication to quality, sustainability, and ground-breaking innovation. Our goal is to equip builders and contractors with superior technologies that set new industry standards, ensuring every project achieves exceptional performance and enduring durability.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 shadow-xl flex flex-col h-full transition-transform transform hover:scale-[1.02]">
                <Target className="w-12 h-12 text-yellow-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At KRISEY, our mission is to pioneer next-generation construction solutions that protect against dampness, mold, chemical exposure, and environmental stress. In a market flooded with unverified claims, we stand apart through innovation, scientific research, and expert manufacturing.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Builders across India are in search of a lifetime-guaranteed solution—and <span className="text-red-600">Krisey</span> delivers with an advanced formulation that ensures exceptional durability and long-term structural protection.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Expertise ── */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-16 relative z-10">
                Our <span className="text-red-600">Expertise</span>
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch relative z-10">
              <AnimatedSection>
                <div className="h-full space-y-6 bg-white rounded-xl shadow-lg p-8 flex flex-col">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our manufacturing facility sets the gold standard for quality and innovation. From "high-purity imported minerals" to "proprietary binders," every component is selected for excellence.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    With McGlasgo's scientific backing, our labs ensure "rigorous multi-phase testing," certifying "unmatched reliability" and "high performance" in every wall care product.
                  </p>
                  <div className="mt-6 border-t pt-6 flex-grow flex items-end">
                    <p className="font-semibold text-red-500">"Built on science." "Driven by innovation." "Trusted across India."</p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className="h-full bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 rounded-3xl p-10 shadow-xl transform hover:scale-[1.02] transition-transform flex flex-col">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-red-700 text-white p-3 rounded-full shadow-md">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h4 className="text-2xl font-bold text-white drop-shadow-md">Innovation & Research</h4>
                  </div>
                  <p className="text-white/90 leading-relaxed drop-shadow-sm flex-grow">
                    Through McGlasgo's research center, our experts refine formulas biannually—keeping Krisey products on the cutting edge of global construction technology. This ongoing innovation ensures superior performance, durability, and industry-leading quality for every project we support.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </section>

      {/* ── Leadership ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-red-500 font-semibold tracking-widest text-sm uppercase mb-2">Meet The Leader</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                Our <span className="text-[#E63946]">Leadership</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-yellow-400 mx-auto rounded-full"></div>
            </div>
          </AnimatedSection>

          {/* ── Profile Card: Image left, details right ── */}
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-5 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 mb-10">

              {/* Large square image panel */}
              <div className="lg:col-span-2 relative" style={{ minHeight: "520px" }}>
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=700&h=700&dpr=2"
                  alt="Arun Kumar S"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                {/* Dark gradient at bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"></div>
                {/* Red left accent stripe */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#E63946] to-yellow-400"></div>
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="text-3xl font-black text-white leading-tight tracking-tight">Arun Kumar S</h3>
                  <p className="text-yellow-400 font-bold text-sm tracking-widest uppercase mt-1">Multi-Industry Entrepreneur</p>
                </div>
              </div>

              {/* Details panel */}
              <div className="lg:col-span-3 bg-gray-50 flex flex-col p-8 md:p-10">

                {/* Roles grid */}
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Current Positions</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-7">
                  {roles.map((r, i) => (
                    <div key={i} className="bg-white rounded-xl p-3.5 shadow-sm border border-gray-100 flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#E63946] mt-1.5 flex-shrink-0"></span>
                      <div>
                        <p className="font-bold text-gray-800 text-sm leading-tight">{r.title}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{r.org}</p>
                        <p className="text-red-400 text-xs font-semibold">{r.location}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="border-l-4 border-[#E63946] pl-5 pr-4 py-3 bg-red-50 rounded-r-xl mb-6">
                  <p className="text-gray-700 italic text-sm leading-relaxed">
                    "Age is a number and experience is all that counts. Changing business environments need an agile mind to adopt, retrain and excel in the field of global business."
                  </p>
                </blockquote>

                {/* Bio */}
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  From owning and operating sand mines, to exporting, to creating an indigenous manufacturing platform and launching creative products — Arun has carved a name as a veteran across industries. Young in age but a self-taught expert with experience spanning continents and industries.
                </p>

                {/* Contact strip */}
                <div className="mt-7 pt-6 border-t border-gray-200 flex flex-wrap gap-x-5 gap-y-3">
                  <a href="tel:+919442434404" className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-[#E63946] transition-colors font-medium">
                    <Phone className="w-3.5 h-3.5 text-red-500" /> +91 9442434404
                  </a>
                  <a href="tel:+919944907021" className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-[#E63946] transition-colors font-medium">
                    <Phone className="w-3.5 h-3.5 text-red-500" /> +91 9944907021
                  </a>
                  <a href="mailto:arunkumar.metal@gmail.com" className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-[#E63946] transition-colors font-medium">
                    <Mail className="w-3.5 h-3.5 text-red-500" /> arunkumar.metal@gmail.com
                  </a>
                  <a href="http://www.aigle-intl.com" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-[#E63946] transition-colors font-medium">
                    <Globe className="w-3.5 h-3.5 text-red-500" /> aigle-intl.com <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
                  </a>
                  <a href="http://www.global-rainmakers.com" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-[#E63946] transition-colors font-medium">
                    <Globe className="w-3.5 h-3.5 text-red-500" /> global-rainmakers.com <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Education + Interests + Early Career row ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            <AnimatedSection delay={0.05}>
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm h-full">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-4 h-4 text-red-600" />
                  </div>
                  <h4 className="font-bold text-gray-800 text-sm">Education</h4>
                </div>
                <div className="space-y-4">
                  {education.map((e, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E63946] to-yellow-400 flex items-center justify-center text-white font-black text-xs flex-shrink-0">
                        {e.year.slice(2)}
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-sm leading-tight">{e.degree}</p>
                        <p className="text-gray-500 text-xs mt-0.5">{e.institution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-100 rounded-2xl p-6 shadow-sm h-full">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-8 bg-yellow-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-4 h-4 text-yellow-700" />
                  </div>
                  <h4 className="font-bold text-gray-800 text-sm">Interests & Hobbies</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {hobbies.map((h, i) => (
                    <span key={i} className="bg-white border border-yellow-200 text-yellow-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="bg-gradient-to-br from-[#E63946] to-yellow-500 rounded-2xl p-6 shadow-sm h-full text-white">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-bold text-sm">Early Career</h4>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  After stints as an intern with the <strong>Tamil Nadu Task Force</strong> in wildlife tracking and reporting, Arun built a <em>"can do"</em> attitude and <em>"will do"</em> mindset — a philosophy defining every venture since.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* ── Work Experience ── */}
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Past */}
              <div className="bg-gray-50 rounded-2xl p-7 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-400 border border-gray-300 rounded-full px-3 py-1">Past</span>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>
                <div className="space-y-6">
                  {pastExperience.map((exp, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-yellow-200 mt-1"></div>
                        {i < pastExperience.length - 1 && <div className="w-px flex-1 bg-yellow-200 mt-1 min-h-[24px]"></div>}
                      </div>
                      <div className="pb-1">
                        <h6 className="font-bold text-gray-800 text-sm leading-snug">{exp.title}</h6>
                        <div className="flex items-center gap-1 text-yellow-600 text-xs font-semibold mt-0.5 mb-1.5">
                          <MapPin className="w-3 h-3" /> {exp.location}
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">{exp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Present */}
              <div className="bg-gray-50 rounded-2xl p-7 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-black uppercase tracking-widest text-[#E63946] border border-red-300 rounded-full px-3 py-1">Present</span>
                  <div className="flex-1 h-px bg-red-100"></div>
                </div>
                <div className="space-y-6">
                  {presentExperience.map((exp, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="w-3 h-3 rounded-full bg-[#E63946] border-2 border-red-200 mt-1"></div>
                        {i < presentExperience.length - 1 && <div className="w-px flex-1 bg-red-200 mt-1 min-h-[24px]"></div>}
                      </div>
                      <div className="pb-1">
                        <h6 className="font-bold text-gray-800 text-sm leading-snug">{exp.title}</h6>
                        <div className="flex items-center gap-1 text-[#E63946] text-xs font-semibold mt-0.5 mb-1.5">
                          <MapPin className="w-3 h-3" /> {exp.location}
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">{exp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>
    </div>
  );
};

export default About;