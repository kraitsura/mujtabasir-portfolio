"use client";

import { ImageCarousel } from "@/components/ImageCarousel";
import { motion } from "framer-motion";
import { useState } from "react";

// Updated image type to include category
interface PortfolioImage {
  src: string;
  alt: string;
  category: string;
}

// Sample images with categories
const images: PortfolioImage[] = [
  {
    src: "/gg.jpg",
    alt: "Character Design 1",
    category: "CHARACTER DESIGN",
  },
  {
    src: "/gg.jpg",
    alt: "Character Design 2",
    category: "CHARACTER DESIGN",
  },
  {
    src: "/gg.jpg",
    alt: "Prop Design 1",
    category: "PROP DESIGN",
  },
  {
    src: "/gg.jpg",
    alt: "Environment 1",
    category: "ENVIRONMENTS",
  },
];

const categories = ["ALL", "CHARACTER DESIGN", "PROP DESIGN", "ENVIRONMENTS"];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // Filter images based on selected category
  const filteredImages =
    selectedCategory === "ALL"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <main className="min-h-screen bg-cream font-mono p-4 md:p-8">
      {/* Header */}
      <motion.header
        className="w-full bg-rose-200 border-2 border-black p-4 mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-espresso">
            MUJTABA SABIR
          </h1>
          <span className="text-xl md:text-2xl tracking-tight text-mocha">
            PORTFOLIO
          </span>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="grid md:grid-cols-[2fr,1fr] gap-8">
        {/* Visual Library Section */}
        <motion.section
          className="space-y-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-espresso">VISUAL LIBRARY</h2>
            <span className="text-sm text-mocha">
              {filteredImages.length} item
              {filteredImages.length !== 1 ? "s" : ""}
            </span>
          </div>
          {filteredImages.length > 0 ? (
            <ImageCarousel images={filteredImages} />
          ) : (
            <div className="aspect-[16/9] border-2 border-black flex items-center justify-center text-mocha">
              No images in this category
            </div>
          )}
        </motion.section>

        {/* Concept Art Section */}
        <motion.section
          className="space-y-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-xl font-bold mb-4 text-espresso">CONCEPT ART</h2>
          <div className="space-y-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full border-2 border-black p-3 text-left transition-colors text-espresso
                  ${
                    selectedCategory === category
                      ? "bg-rose-300"
                      : "bg-rose-200 hover:bg-rose-300"
                  }`}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Bottom Navigation/Description Area */}
      <motion.div
        className="mt-8 grid md:grid-cols-[2fr,1fr] gap-8"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="border-t-2 border-black pt-4">
          <p className="text-sm text-mocha">
            Selected work from various projects and explorations. Click on
            categories to filter the visual library.
          </p>
        </div>
        <div className="border-t-2 border-black pt-4">
          <p className="text-sm text-mocha">© 2024 All Rights Reserved</p>
        </div>
      </motion.div>
    </main>
  );
}
