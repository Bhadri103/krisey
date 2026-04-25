import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Search } from "lucide-react";

// Local Product Image Imports
import Ceramikha from "../components/images/Ceramikha.png";
import NovaDrM1Bond from "../components/images/DallasDrM1Bond-old.jpeg";
import NovaGypsumPlasty from "../components/images/DallasDrM1Bond-old.jpeg";
import NovaGroutPlus from "../components/images/GroutPlus.png";
import NovaReadyPlaster from "../components/images/DallasReadyPlasty.png";
import NovaTileAdhensive from "../components/images/DallasTileAdhensive.png";
import SupremeGplastWhite from "../components/images/SupremeGplastWhite.png";
import matrixgypMatrix from "../components/images/matrixgypMatrix.png";
import matrixgypsmbond from "../components/images/matrixgypsmbond.png";

import CoarseAggregates from "../components/images/products/CoarseAggregates.jpg";
import FineAggregated from "../components/images/products/fine-aggregated.jpg";
import Gypsum from "../components/images/products/gypsm.jpg";
import Laterite from "../components/images/products/laterite.jpg";
import MSAND from "../components/images/products/MSAND.jpg";
import PSAND from "../components/images/products/PSAND.jpg";
import RedGravel from "../components/images/products/red-gravel.jpeg";
import RiverSand from "../components/images/products/River-Sand.jpg";
import RMC from "../components/images/products/RMC Ready Mix Concrete.jpg";
import SilicaSand from "../components/images/products/silicasand.jpg";
import SolidBrick from "../components/images/products/solidbrick.jpg";

// Combined Gallery Array
const galleryImages = [
  // Wall Care
  { id: "wall-plaster", name: "Nova Wall Plaster", src: NovaReadyPlaster, category: "wallcare" },
  { id: "wall-putty", name: "Supreme G-Plast White", src: SupremeGplastWhite, category: "wallcare" },
  { id: "gypsum-plaster", name: "Nova Gypsum Plaster", src: NovaGypsumPlasty, category: "wallcare" },
  { id: "tile-adhesive", name: "Nova Tile Adhesive", src: NovaTileAdhensive, category: "wallcare" },
  { id: "grout-plus", name: "Nova Grout Plus", src: NovaGroutPlus, category: "wallcare" },

  // Ceramikha
  { id: "ceramikha", name: "Ceramikha Gypsum Plaster", src: Ceramikha, category: "ceramikha" },

  // Matrix
  { id: "matrix-bond", name: "Matrix Gypsum Bond", src: matrixgypsmbond, category: "matrix" },
  { id: "matrix-gyp", name: "GypMatrix Plaster", src: matrixgypMatrix, category: "matrix" },

  // Dr. Proof
  { id: "dr-proof-m1", name: "Dr. M1 Bond Waterproofing", src: NovaDrM1Bond, category: "drproof" },

  // Aggregates
  { id: "m-sand", name: "M-Sand", src: MSAND, category: "aggregates" },
  { id: "p-sand", name: "P-Sand", src: PSAND, category: "aggregates" },
  { id: "river-sand", name: "River Sand", src: RiverSand, category: "aggregates" },
  { id: "red-gravels", name: "Red Gravels", src: RedGravel, category: "aggregates" },
  { id: "silica-sand", name: "Silica Sand", src: SilicaSand, category: "aggregates" },
  { id: "laterite", name: "Laterite", src: Laterite, category: "aggregates" },
  { id: "gypsum-raw", name: "Raw Gypsum", src: Gypsum, category: "aggregates" },
  { id: "fine-aggregates", name: "Fine Aggregates", src: FineAggregated, category: "aggregates" },
  { id: "coarse-aggregates", name: "Coarse Aggregates", src: CoarseAggregates, category: "aggregates" },
  { id: "rmc", name: "Ready Mix Concrete (RMC)", src: RMC, category: "aggregates" },
  { id: "solid-bricks", name: "Solid Bricks", src: SolidBrick, category: "aggregates" },
];

const categories = [
  { id: "wallcare", label: "Wall Care & Putty" },
  { id: "ceramikha", label: "Ceramikha Green Solutions" },
  { id: "matrix", label: "Matrix Bonding" },
  { id: "drproof", label: "Dr. Proof Waterproofing" },
  { id: "aggregates", label: "Aggregates & Raw Materials" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight * 0.85) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-8");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard navigation for the Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === "Escape") {
          setSelectedImage(null);
        } else if (e.key === "ArrowRight") {
          setSelectedImage((prev) =>
            prev !== null ? (prev + 1) % galleryImages.length : null
          );
        } else if (e.key === "ArrowLeft") {
          setSelectedImage((prev) =>
            prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
          );
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  // Lock background scroll when Lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <span className="text-red-600 font-bold tracking-widest uppercase text-sm mb-3 block">Product Catalog</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
            Our Product <span className="text-[#E63946]">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Explore our comprehensive range of high-performance construction materials, beautifully cataloged for your convenience.
          </p>
        </div>

        {/* Categories & Grids */}
        {categories.map((category) => {
          const categoryImages = galleryImages.filter(img => img.category === category.id);
          
          if (categoryImages.length === 0) return null;

          return (
            <div key={category.id} className="mb-20">
              {/* Category Header */}
              <div className="flex items-center gap-6 mb-10 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: '0.1s' }}>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 whitespace-nowrap">
                  {category.label}
                </h3>
                <div className="h-px bg-gray-200 flex-grow"></div>
              </div>

              {/* Category Image Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {categoryImages.map((image, index) => {
                  // Find the true index of the image in the main array for the lightbox
                  const globalIndex = galleryImages.findIndex(img => img.id === image.id);

                  return (
                    <div
                      key={image.id}
                      className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-red-100 group cursor-pointer flex flex-col h-full"
                      style={{ transitionDelay: `${(index % 4) * 0.1}s` }}
                      onClick={() => setSelectedImage(globalIndex)}
                    >
                      {/* Styled exactly like your Home Page product cards */}
                      <div className="w-full h-48 md:h-64 bg-white rounded-t-2xl flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                          <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-sm">
                            <Search className="w-5 h-5 text-red-600" />
                          </div>
                        </div>
                        <img
                          src={image.src}
                          alt={image.name}
                          className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500 relative z-0"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5 text-center flex-grow flex flex-col justify-center">
                        <span className="text-[11px] font-bold text-red-600 uppercase tracking-wider mb-2 block">
                          {category.label}
                        </span>
                        <h3 className="text-gray-900 font-semibold text-lg line-clamp-2">
                          {image.name}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8">
          
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50 bg-white/10 hover:bg-red-600 p-2 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all z-50 bg-white/10 hover:bg-red-600 p-3 sm:p-4 rounded-full hover:scale-110"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((prev) => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null);
            }}
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Modal Content */}
          <div className="relative max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white rounded-2xl p-6 max-w-3xl w-full max-h-[70vh] flex items-center justify-center relative overflow-hidden shadow-2xl">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].name}
                className="max-h-[65vh] max-w-full object-contain"
              />
            </div>
            
            <div className="mt-6 text-center bg-black/60 backdrop-blur-md py-4 px-8 rounded-full border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-1">
                {galleryImages[selectedImage].name}
              </h3>
              <p className="text-sm font-medium text-red-400 uppercase tracking-widest">
                {categories.find(c => c.id === galleryImages[selectedImage].category)?.label}
              </p>
            </div>
          </div>

          {/* Navigation Next */}
          <button
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all z-50 bg-white/10 hover:bg-red-600 p-3 sm:p-4 rounded-full hover:scale-110"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((prev) => prev !== null ? (prev + 1) % galleryImages.length : null);
            }}
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;