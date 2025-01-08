import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ImageFrameProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export function ImageFrame({ src, alt, title, description }: ImageFrameProps) {
  return (
    <motion.div
      className="flex flex-col md:flex-row bg-white shadow-sharp border border-black"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full md:w-2/3 aspect-video">
        <Image src={src} alt={alt} layout="fill" objectFit="cover" />
      </div>
      <div className="w-full md:w-1/3 p-4 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-2 font-mono text-espresso">
          {title}
        </h2>
        <p className="text-mocha font-mono">{description}</p>
      </div>
    </motion.div>
  );
}
