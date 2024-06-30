import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     backgroundImage: {
        'hero-left': "url('https://res.cloudinary.com/mindset/image/upload/v1709807082/hero-left_xciwgn.png')",
        'hero-right': "url('https://res.cloudinary.com/mindset/image/upload/v1709807082/hero-right_kvuvel.png')",
        'mainbg': "url('https://res.cloudinary.com/mindset/image/upload/v1709898979/Group_7_vfcvmg.png')",
        'bga': "url('https://res.cloudinary.com/mindset/image/upload/v1709914230/Rectangle_6350_h27izt.png')",
        'bgs': "url('https://res.cloudinary.com/mindset/image/upload/v1709914524/Rectangle_6336_bcpgme.png')",
      },
    },
  },
  plugins: [],
};
export default config;
