import React, { ReactNode } from "react";
import {
  ArrowRight,
  Shield,
  Star,
  Users,
  Award,
  Factory,
  Leaf,
  FlaskConical,
  Target,
  Eye,
  Zap,
  CheckCircle,
  Phone,
  Mail,
} from "lucide-react";
import CompletedProjects from "../components/CompletedProjects";
import HomeSlider from "./HomeSlider";
import CustomerReviews from "../components/CustomerReviews";
import Slider from "../components/Slider";

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

const features = [
  {
    icon: Shield,
    title: "Scientifically Engineered",
    description: "Lifetime guaranteed products developed through advanced research and rigorous testing",
  },
  {
    icon: Star,
    title: "Superior Technology",
    description: "Effective protection against dampness, mold, microbial growth, and chemical damage",
  },
  {
    icon: Users,
    title: "Direct to Customer",
    description: "Eliminates intermediaries, providing competitive pricing and consistent quality",
  },
  {
    icon: Award,
    title: "Global Standards",
    description: "India's only manufacturer of Next-Gen buildings that meet international standards",
  },
  {
    icon: Factory,
    title: "Advanced Manufacturing",
    description: "World-class facilities with automated controls and proprietary polymer development",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Production",
    description: "Sustainable materials and energy-efficient processes that reduce environmental impact",
  },
];

const whyChooseReasons = [
  "Direct Factory-to-Customer Pricing",
  "Scientifically Engineered & Lifetime Guaranteed",
  "Superior Waterproofing Technology",
  "Cost-Effective & High Performance",
  "Continuous Innovation & Leadership",
  "Highly Equipped Manufacturing & Research Facilities",
  "Customizable Solutions",
  "Eco-Friendly Production",
];

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      {/* Premium Fonts & Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=Outfit:wght@300;400;500;600&display=swap');

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          opacity: 0;
          animation: fade-in 0.8s ease-out forwards;
        }

        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          line-height: 1.1;
          font-weight: 700;
          color: #111;
          margin-bottom: 1rem;
        }

        .outfit-text {
          font-family: 'Outfit', sans-serif;
        }
      `}</style>

      <HomeSlider />

      {/* <CompletedProjects /> */}
      <CustomerReviews />

      {/* ── Why Choose Dallas Ready Plast ── */}
      {/* <section className="py-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80vw] h-[80vw] bg-yellow-500/5 rounded-full blur-3xl z-0 pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="section-title">
              Why Choose <span className="text-[#dc2626]">Dallas</span> Ready Plast?
            </h2>
            <p className="outfit-text text-gray-500 text-sm sm:text-base font-light">
              Experience the perfect blend of scientific innovation, uncompromising quality, and direct-to-customer value.
            </p>
          </AnimatedSection>

             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 max-w-7xl mx-auto items-stretch">
            {whyChooseReasons.map((reason, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.05}
                className="h-full"
              >
                <div className="bg-white rounded-2xl border border-[#ece9e3] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 p-4 sm:p-5 flex flex-col items-center text-center gap-3 h-full cursor-default">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#dc2626]" />
                  </div>
                  <span className="outfit-text text-[0.8rem] sm:text-[0.95rem] font-medium text-gray-800 leading-snug">
                    {reason}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Why Dallas Wallcare Stands Apart ── */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="section-title">
              Why <span className="text-[#dc2626]">Dallas Wallcare</span> Stands Apart
            </h2>
          </AnimatedSection>
 
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl border border-[#ece9e3] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.09)] transition-all duration-300 hover:-translate-y-1 p-4 sm:p-6 flex flex-col h-full cursor-default">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center shrink-0 mb-4 sm:mb-5">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#dc2626]" />
                    </div>
                    <div>
                      <h4 className="outfit-text font-semibold text-[0.9rem] sm:text-[1.1rem] text-gray-900 mb-2 leading-tight">
                        {feature.title}
                      </h4>
                      <p className="outfit-text font-light text-[0.75rem] sm:text-[0.9rem] text-gray-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;