import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ImageFrameProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  folder: string;
}

export function ImageFrame({
  src,
  alt,
  title,
  description,
  folder,
}: ImageFrameProps) {
  return (
    <motion.div
      className="flex flex-col border border-black bg-white shadow-sharp"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="border-b border-black p-2 flex justify-between items-center bg-cream">
        <span className="font-mono text-espresso">[ {title} ]</span>
        <span className="font-mono text-mocha">/{folder}/</span>
      </div>
      <div className="relative w-full h-[400px] bg-latte">
        {/* Remove fill prop and use unoptimized for external images */}
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          unoptimized // Important for external images
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="border-t border-black p-4 bg-white">
        <div className="font-mono text-mocha whitespace-pre-wrap">
          {`+${"-".repeat(description.length + 2)}+\n`}
          {`| ${description} |\n`}
          {`+${"-".repeat(description.length + 2)}+`}
        </div>
      </div>
    </motion.div>
  );
}
