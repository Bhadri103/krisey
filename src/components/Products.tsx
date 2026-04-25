import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  Award,
  Droplets,
  Zap,
  Leaf,
  Settings,
  Activity,
  Target,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import {
  dallasProducts,
  drProofProducts,
  ceramikhaProducts,
  heroSlides,
  matrixProducts,
} from "../data/productsData";
import Banner from "./images/Banner.jpeg";
import ProductSlider from '../pages/ProductSlider'
import NovaDrM1Bond from "./images/DallasDrM1Bond-old.jpeg";
import NovaGypsumPlasty from "./images/DallasDrM1Bond-old.jpeg";
import NovaGroutPlus from "./images/GroutPlus.png";
import NovaReadyPlaster from "./images/DallasReadyPlasty.png";
import NovaTileAdhensive from "./images/DallasTileAdhensive.png";
import SupremeGplastWhite from "./images/SupremeGplastWhite.png";
import makado from "./images/makado.png";
import matrixgypMatrix from "./images/matrixgypMatrix.png";
import matrixgypsmbond from "./images/matrixgypsmbond.png";

// ── Aggregate / Building Material images ──────────────────────────────────────
import CoarseAggregates from "./images/products/CoarseAggregates.jpg";
import FineAggregated from "./images/products/fine-aggregated.jpg";
import Gypsum from "./images/products/gypsm.jpg";
import Laterite from "./images/products/laterite.jpg";
import MSAND from "./images/products/MSAND.jpg";
import PSAND from "./images/products/PSAND.jpg";
import RedGravel from "./images/products/red-gravel.jpeg";
import RiverSand from "./images/products/River-Sand.jpg";
import RMC from "./images/products/RMC Ready Mix Concrete.jpg";
import SilicaSand from "./images/products/silicasand.jpg";
import SolidBrick from "./images/products/solidbrick.jpg";

// ── Static data ───────────────────────────────────────────────────────────────
const aggregateProducts = [
  { id: "m-sand", name: "M-Sand", price: "Get Quote", image: MSAND },
  { id: "p-sand", name: "P-Sand", price: "Get Quote", image: PSAND },
  { id: "river-sand", name: "River Sand", price: "Get Quote", image: RiverSand },
  { id: "red-gravels", name: "Red Gravels", price: "Get Quote", image: RedGravel },
  { id: "silica-sand", name: "Silica Sand", price: "Get Quote", image: SilicaSand },
  { id: "laterite", name: "Laterite", price: "Get Quote", image: Laterite },
  { id: "gypsum-raw", name: "Gypsum", price: "Get Quote", image: Gypsum },
  { id: "fine-aggregates", name: "Fine Aggregates", price: "Get Quote", image: FineAggregated },
  { id: "coarse-aggregates", name: "Coarse Aggregates", price: "Get Quote", image: CoarseAggregates },
  { id: "rmc-ready-mix", name: "RMC Ready Mix Concrete", price: "Get Quote", image: RMC },
  { id: "solid-bricks", name: "Solid Bricks", price: "Get Quote", image: SolidBrick },
];

const brandCategories = [
  {
    id: "wall-care",
    name: "Wall Care",
    tagline: "Plaster, Putty, Tile Adhesives & Waterproof Solutions",
    image: NovaReadyPlaster,
    description: "High-performance wall care and finishing products",
  },
  {
    id: "aggregates",
    name: "Aggregates",
    tagline: "M-Sand, P-Sand, River Sand, Gravels & More",
    image: MSAND,
    description: "Essential building materials for strong construction",
  },
  {
    id: "finishing",
    name: "Finishing",
    tagline: "Tile Adhesives, Pre Mix & Waterproofing",
    image: NovaTileAdhensive,
    description: "Perfect finishing solutions for modern buildings",
  },
  {
    id: "matrix",
    name: "Matrix",
    tagline: "Advanced Gypsum & Bond Products",
    image: matrixgypMatrix,
    description: "Next-gen gypsum and bonding solutions",
  },
  {
    id: "dr-proof",
    name: "Dr. Proof",
    tagline: "Professional Waterproofing Solutions",
    image: NovaDrM1Bond,
    description: "Reliable damp-proof and waterproof systems",
  },
];
const finishingProducts = [
  {
    id: "tile-adhesive-gen",
    name: "Tile Adhesives",
    price: "Get Quote",
    image: "https://images.unsplash.com/photo-1631016800696-5ea8801b3c2a?w=400&q=80",
  },
  {
    id: "premix-plaster",
    name: "Pre Mix Plaster",
    price: "Get Quote",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80",
  },
  {
    id: "waterproof-solution",
    name: "Water Proof Solution",
    price: "Get Quote",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
const ProductsPage = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // ── Shared Product Card ──────────────────────────────────────────────────────
  const ProductCard = ({ product, hideButton = false }: { product: any; hideButton?: boolean }) => (
    <div
      onClick={() => !hideButton && navigate(`/products/${product.id}`)}
      className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer h-full"
    >
      <div className="w-full h-36 md:h-52 bg-white flex items-center justify-center relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-4 md:p-5 flex flex-col flex-grow">
        <h4 className="font-bold text-gray-800 text-sm md:text-lg text-center mb-2 line-clamp-2">
          {product.name}
        </h4>

        {/* ✅ Hide button for aggregates */}
        {!hideButton && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/products/${product.id}`);
            }}
            className="mt-auto w-full flex items-center justify-center gap-2 text-red-600 text-xs md:text-sm font-medium py-2 md:py-2.5 rounded-xl hover:bg-red-50 hover:text-red-700 transition-all duration-300"
          >
            View Details <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );

  // ── Section Header helper ────────────────────────────────────────────────────
  const SectionHeader = ({
    accent,
    label,
    rest,
    subtitle,
    accentColor = "text-red-600",
    lineColor = "via-red-500",
  }: {
    accent: string;
    label: string;
    rest?: string;
    subtitle?: string;
    accentColor?: string;
    lineColor?: string;
  }) => (
    <div className="mb-8 md:mb-10 flex flex-col items-center text-center">
      <div className="flex items-center w-full mb-4">
        <div className={`flex-grow h-px bg-gradient-to-r from-transparent ${lineColor} to-transparent`} />
        <h3 className={`mx-6 text-2xl md:text-4xl font-semibold text-gray-900 whitespace-nowrap`}>
          <span className={accentColor}>{accent}</span>{label}{rest && ` ${rest}`}
        </h3>
        <div className={`flex-grow h-px bg-gradient-to-r from-transparent ${lineColor} to-transparent`} />
      </div>
      {subtitle && (
        <p className="text-sm md:text-base text-gray-500">{subtitle}</p>
      )}
    </div>
  );

  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero Slider ─────────────────────────────────────────────────────── */}
      <section  >
        <ProductSlider/>
      </section>

      {/* ── Main Products Section ────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Page title */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm font-bold tracking-widest text-red-600 uppercase mb-3 block">
              Discover Excellence
            </span>
            <h2 className="text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
              Our Premium{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                Products
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
              Quality over quantity - High-performance construction materials engineered for the modern world.
            </p>
          </div>

          {/* Brand Categories */}
          <div className="flex overflow-x-auto gap-4 md:gap-6 mb-20 md:grid md:grid-cols-3 lg:grid-cols-5 md:overflow-visible">

            {brandCategories.map((brand) => (
              <div
                key={brand.id}
                onClick={() => navigate(`/products/${brand.id}`)}
                className="min-w-[160px] md:min-w-0 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-5 md:p-6 flex flex-col items-center cursor-pointer group"
              >

                {/* Image */}
                <div className="w-20 h-20 md:w-24 md:h-24 mb-4 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-bold text-gray-900 text-center">
                  {brand.name}
                </h3>

              </div>
            ))}

          </div>
{/* ── Aggregates & Building Materials ─────────────────────────────── */}
          <div className="mb-20">
            <SectionHeader
              accent="Aggregates"
              label=" & Building Materials"
              subtitle="M-Sand, P-Sand, River Sand, Gravels, Laterite, Gypsum & more"
              accentColor="text-orange-500"
              lineColor="via-orange-400"
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {aggregateProducts.map((product) => (
                <ProductCard key={product.id} product={product} hideButton />
              ))}
            </div>
          </div>
          {/* ── Dallas Products ──────────────────────────────────────────────── */}
          <div className="mb-20">
            <SectionHeader
              accent="Wall Care"
              label=" Products"
              subtitle="India's 1st Next-Gen DampProof Wallcare Products"
              accentColor="text-red-600"
              lineColor="via-red-500"
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {dallasProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* ── Dr. Proof Products ──────────────────────────────────────────── */}
          <div className="mb-20">
            <SectionHeader
              accent="DR. PROOF"
              label=" Products"
              subtitle="India's 1st Next-Gen DampProof Solutions"
              accentColor="text-indigo-600"
              lineColor="via-indigo-500"
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {drProofProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* ── Ceramikha Products ───────────────────────────────────────────── */}
          <div className="mb-20  ">
            <SectionHeader
              accent="CERAMIKHA"
              label=" Products"
              subtitle="Green Building, Safer Homes, Healthier Children"
              accentColor="text-emerald-600"
              lineColor="via-emerald-500"
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {ceramikhaProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* ── Matrix Products ──────────────────────────────────────────────── */}
          <div className="mb-20">
            <SectionHeader
              accent="MATRIX"
              label=" Products"
              subtitle="Advanced Gypsum & Bond Solutions"
              accentColor="text-blue-600"
              lineColor="via-blue-500"
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {matrixProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          
 

        </div>
      </section>

      {/* ── Why Choose Dallas ────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-red-600">Us?</span>
            </h2>
            <p className="text-xl text-gray-600">
              Unmatched Quality, Value, and Innovation in Construction Materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Award className="w-8 h-8 text-yellow-500" />, title: "Direct Factory-to-Customer Pricing", description: "Eliminates intermediaries for best value", stat: "Up to 40% savings" },
              { icon: <Shield className="w-8 h-8 text-blue-500" />, title: "Scientifically Engineered & Lifetime Guaranteed", description: "Advanced research and testing", stat: "15+ years R&D" },
              { icon: <Droplets className="w-8 h-8 text-cyan-500" />, title: "Superior Waterproofing Technology", description: "Prevents dampness, mold, and chemical damage", stat: ">95% water resistance" },
              { icon: <Zap className="w-8 h-8 text-orange-500" />, title: "Cost-Effective & High Performance", description: "Excellent value with superior strength", stat: "2x stronger than regular plaster" },
              { icon: <Settings className="w-8 h-8 text-gray-600" />, title: "Continuous Innovation", description: "Formula updates every six months", stat: "6-month update cycle" },
              { icon: <Activity className="w-8 h-8 text-purple-500" />, title: "Highly Equipped Manufacturing", description: "Automated quality controls", stat: "99.8% quality rate" },
              { icon: <Target className="w-8 h-8 text-red-500" />, title: "Customizable Solutions", description: "Adapted to specific construction needs", stat: "1000+ custom projects" },
              { icon: <Leaf className="w-8 h-8 text-green-500" />, title: "Eco-Friendly Production", description: "Sustainable materials and processes", stat: "Carbon neutral by 2025" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;