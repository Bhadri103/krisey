import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Banner from "./images/Banner.png";
import Ceramikha from "./images/Ceramikha.png";
import NovaDrM1Bond from "./images/DallasDrM1Bond-old.jpeg";
import NovaGypsumPlasty from "./images/DallasDrM1Bond-old.jpeg";
import NovaGroutPlus from "./images/GroutPlus.png";
import NovaReadyPlaster from "./images/DallasReadyPlasty.png";
import NovaTileAdhensive from "./images/DallasTileAdhensive.png";
import SupremeGplastWhite from "./images/SupremeGplastWhite.png";
import makado from "./images/makado.png";
import matrixgypMatrix from "./images/matrixgypMatrix.png";
import matrixgypsmbond from "./images/matrixgypsmbond.png";

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
const ProductsPage = () => {
  const navigate = useNavigate();
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

  const novaProducts = [
    { id: "wall-plaster", name: "Wall-Plaster", image: NovaReadyPlaster, price: "₹450/bag" },
    { id: "wall-putty", name: "Wall-Putty", image: SupremeGplastWhite, price: "₹350/bag" },
    { id: "gypsum-plaster", name: "Gypsum-Plaster", image: NovaGypsumPlasty, price: "₹380/bag" },
    { id: "tile-adhesive", name: "Tile-Adhesive", image: NovaTileAdhensive, price: "₹350/bag" },
    { id: "grout-plus", name: "Grout-Plus", image: NovaGroutPlus, price: "₹280/bag" },
  ];

  const ceramicaProducts = [
    { id: "ceramikha-gypsum-plaster", name: "Ceramikha", image: Ceramikha, price: "₹420/bag" },
  ];

  const matrixProducts = [
    { id: "matrixgypsmbond", name: "Gypsum Bond", image: matrixgypsmbond, price: "₹420/bag" },
    { id: "gypmatrix-gypsum-plaster", name: "GypMatrix", image: matrixgypMatrix, price: "₹420/bag" },
  ];

  const drProofProducts = [
    { id: "dr-proof-m1-bond", name: "Dr. M1 Bond", image: NovaDrM1Bond, price: "₹580/bag" },
  ];

  const aggregateProducts = [
    {
      id: "m-sand",
      name: "M-Sand",
      price: "Get Quote",
      image: MSAND,
    },
    {
      id: "p-sand",
      name: "P-Sand",
      price: "Get Quote",
      image: PSAND,
    },
    {
      id: "river-sand",
      name: "River Sand",
      price: "Get Quote",
      image: RiverSand,
    },
    {
      id: "red-gravels",
      name: "Red Gravels",
      price: "Get Quote",
      image: RedGravel,
    },
    {
      id: "silica-sand",
      name: "Silica Sand",
      price: "Get Quote",
      image: SilicaSand,
    },
    {
      id: "laterite",
      name: "Laterite",
      price: "Get Quote",
      image: Laterite,
    },
    {
      id: "gypsum-raw",
      name: "Gypsum",
      price: "Get Quote",
      image: Gypsum,
    },
    {
      id: "fine-aggregates",
      name: "Fine Aggregates",
      price: "Get Quote",
      image: FineAggregated,
    },
    {
      id: "coarse-aggregates",
      name: "Coarse Aggregates",
      price: "Get Quote",
      image: CoarseAggregates,
    },
    {
      id: "rmc-ready-mix",
      name: "RMC Ready Mix Concrete",
      price: "Get Quote",
      image: RMC,
    },
    {
      id: "solid-bricks",
      name: "Solid Bricks",
      price: "Get Quote",
      image: SolidBrick,
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

  const ProductCard = ({ product }) => (
    <div
      onClick={() => navigate(`/products/${product.id}`)}
      className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-red-100 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer h-full"
    >
      <div className="w-full h-36 md:h-52 bg-white flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 relative z-10"
        />
      </div>
      <div className="p-4 md:p-5 flex flex-col flex-grow">
        <h4 className="font-bold text-gray-800 text-sm md:text-lg text-center mb-1 line-clamp-2">
          {product.name}
        </h4>
         
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/products/${product.id}`);
          }}
      className="mt-auto w-full flex items-center justify-center gap-2 text-red-600 text-xs md:text-sm font-medium py-2 md:py-2.5 rounded-xl hover:bg-red-50 hover:text-red-700 transition-all duration-300"
        >   
          View Details <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm font-bold tracking-widest text-red-600 uppercase mb-3 block">
              Discover Excellence
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
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
 <div className="mb-20">
            <div className="mb-8 flex flex-col items-center text-center">
              <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-2">
                <span className="text-orange-500">Aggregates</span> &amp; Building Materials
              </h3>
              <p className="text-sm md:text-base text-gray-500">
                M-Sand, P-Sand, River Sand, Gravels, Laterite, Gypsum &amp; more
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {aggregateProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
          {/* NOVA Products Section */}
          <div className="mb-20">
            <div className="mb-8 md:mb-10 flex flex-col items-center text-center">
              <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-2">
                <span className="text-red-600">WALL CARE</span> Products
              </h3>
              <p className="text-sm md:text-base text-gray-500">
                India's 1st Next-Gen DampProof Wallcare Products
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {novaProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* CERAMIKHA Products Section */}
      <div className="mb-20">
            <div className="mb-8 flex flex-col items-center text-center">
              <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-2">
                <span className="text-emerald-600">CERAMIKHA</span> Products
              </h3>
              <p className="text-sm md:text-base text-gray-500">
                Green Building, Safer Homes, Healthier Children
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {ceramicaProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* MATRIX Products Section */}
          <div className="mb-20">
            <div className="mb-8 flex flex-col items-center text-center">
              <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-2">
                <span className="text-blue-600">MATRIX</span> Products
              </h3>
              <p className="text-sm md:text-base text-gray-500">
                India's 1st Next-Gen Wallcare products
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {matrixProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* DR. PROOF Products Section */}
          <div className="mb-20">
            <div className="mb-8 flex flex-col items-center text-center">
              <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-2">
                <span className="text-indigo-600">DR. PROOF</span> Products
              </h3>
              <p className="text-sm md:text-base text-gray-500">
                India's 1st Next-Gen DampProof Solutions
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {drProofProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Aggregates & Building Materials Section */}
         
          <div className="w-full flex justify-center mt-12">
            <button
              onClick={() => navigate("/products")}
              className="group inline-flex items-center justify-center bg-red-600 text-white font-semibold text-sm md:text-base px-8 py-4 rounded-full shadow-lg shadow-red-600/30 hover:bg-red-700 hover:shadow-xl hover:shadow-red-700/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              Explore Entire Catalog
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ProductsPage;