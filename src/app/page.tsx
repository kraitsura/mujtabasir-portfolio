"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ImageFrame } from "@/components/custom/ImageFrame";

const getLoremFlickrUrl = (category: string) => {
  // Add a random number to prevent caching and get different images
  const random = Math.floor(Math.random() * 1000);
  return `https://loremflickr.com/1280/720/${category}?random=${random}`;
};

const images = [
  {
    src: getLoremFlickrUrl("nature,wilderness"),
    alt: "Image 1",
    title: "Serene Nature",
    description:
      "A breathtaking view of untouched wilderness, showcasing the raw beauty of nature.",
    folder: "Nature",
  },
  {
    src: getLoremFlickrUrl("city,architecture"),
    alt: "Image 2",
    title: "Urban Jungle",
    description:
      "A striking cityscape that captures the energy and complexity of modern urban life.",
    folder: "Urban",
  },
  {
    src: getLoremFlickrUrl("forest,trees"),
    alt: "Image 3",
    title: "Forest Whispers",
    description:
      "An intimate portrait of a lush forest, revealing the intricate details of plant life.",
    folder: "Nature",
  },
  {
    src: getLoremFlickrUrl("night,cityscape"),
    alt: "Image 4",
    title: "City Lights",
    description:
      "A dazzling nighttime scene of a city skyline, alive with countless twinkling lights.",
    folder: "Urban",
  },
  {
    src: getLoremFlickrUrl("abstract,art"),
    alt: "Image 5",
    title: "Abstract Harmony",
    description:
      "A mesmerizing abstract composition that plays with color, form, and texture.",
    folder: "Abstract",
  },
  {
    src: getLoremFlickrUrl("geometric,pattern"),
    alt: "Image 6",
    title: "Geometric Dreams",
    description:
      "An intricate arrangement of geometric shapes creating a hypnotic visual rhythm.",
    folder: "Abstract",
  },
];

const folders = ["All", ...new Set(images.map((img) => img.folder))];

export default function Home() {
  const [selectedFolder, setSelectedFolder] = useState("All");
  const [displayMode, setDisplayMode] = useState<"grid" | "single">("grid");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [refreshKey, setRefreshKey] = useState(0); // Add this to force refresh images

  const filteredImages =
    selectedFolder === "All"
      ? images
      : images.filter((img) => img.folder === selectedFolder);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? filteredImages.length - 1 : prevIndex - 1,
    );
  };

  const refreshImages = () => {
    setRefreshKey((prev) => prev + 1);
    // Update image sources with new random numbers
    images.forEach((img) => {
      img.src = getLoremFlickrUrl(img.folder.toLowerCase());
    });
  };

  return (
    <main className="min-h-screen w-full bg-cream font-mono">
      <div className="container mx-auto px-4 py-8">
        {/* ASCII Header */}
        <motion.div
          className="text-center mb-12 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <pre className="text-espresso inline-block">
            {`
 +-----------------+
 |   PORTFOLIO     |
 +-----------------+
        |
        v
`}
          </pre>
        </motion.div>

        {/* Controls Bar */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center p-4 border border-black bg-white shadow-sharp">
          <div className="flex gap-4 mb-4 md:mb-0">
            <button
              onClick={() => setDisplayMode("grid")}
              className={`px-3 py-1 border border-black ${
                displayMode === "grid"
                  ? "bg-espresso text-cream"
                  : "hover:bg-latte"
              }`}
            >
              [■] Grid
            </button>
            <button
              onClick={() => setDisplayMode("single")}
              className={`px-3 py-1 border border-black ${
                displayMode === "single"
                  ? "bg-espresso text-cream"
                  : "hover:bg-latte"
              }`}
            >
              [→] Slideshow
            </button>
            <button
              onClick={refreshImages}
              className="px-3 py-1 border border-black hover:bg-latte"
            >
              [↻] Refresh Images
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {folders.map((folder) => (
              <button
                key={folder}
                onClick={() => {
                  setSelectedFolder(folder);
                  setCurrentImageIndex(0);
                }}
                className={`px-3 py-1 border border-black ${
                  selectedFolder === folder
                    ? "bg-espresso text-cream"
                    : "hover:bg-latte"
                }`}
              >
                /{folder}/
              </button>
            ))}
          </div>
        </div>

        {/* Image Display */}
        <motion.div
          layout
          key={refreshKey} // Add this to force re-render on refresh
          className={`${
            displayMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "max-w-4xl mx-auto"
          }`}
        >
          {displayMode === "grid" ? (
            filteredImages.map((image, index) => (
              <ImageFrame key={`${index}-${refreshKey}`} {...image} />
            ))
          ) : (
            <div className="relative">
              <ImageFrame {...filteredImages[currentImageIndex]} />
              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={prevImage}
                  className="px-4 py-2 border border-black bg-white hover:bg-latte shadow-sharp"
                >
                  {"<<< Prev"}
                </button>
                <button
                  onClick={nextImage}
                  className="px-4 py-2 border border-black bg-white hover:bg-latte shadow-sharp"
                >
                  {"Next >>>"}
                </button>
              </div>
            </div>
          )}
        </motion.div>

        {/* ASCII Footer */}
        <motion.footer
          className="mt-16 text-center text-mocha"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <pre className="text-espresso">
            {`
+-------------------------+
|    © 2024 Portfolio     |
|   <Mujtaba Asif/>      |
+-------------------------+
`}
          </pre>
        </motion.footer>
      </div>
    </main>
  );
}
