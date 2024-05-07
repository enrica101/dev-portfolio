import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["nord", "dark", "night", "synthwave", "retro", "cyberpunk", "lofi", "dracula", "luxury", "forest", "aqua", "wireframe", "black", "gray", "white", "cool", "warm", "deep", "light", "pastel"],
    // themes: [
    //   {
    //     mytheme: {

    //     "primary": "#132043",
    //     "secondary": "#1F4172",
    //     "accent": "#F1B4BB",
    //     "neutral": "#f3f4f6",
    //     "base-100": "#ffffff",
    //     "info": "#1e40af",
    //     "success": "#22c55e",
    //     "warning": "#fbbf24",
    //     "error": "#dc2626",
    //     },
    //   },
    // ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
