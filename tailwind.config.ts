import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5E6D3",
        mocha: "#8E7161",
        espresso: "#5D4037",
        latte: "#D7CCC8",
      },
      fontFamily: {
        mono: ["Courier Prime", "monospace"],
      },
      boxShadow: {
        sharp: "4px 4px 0px 0px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
