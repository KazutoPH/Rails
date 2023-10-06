import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontSize: {
      "heading1-bold": [
        "48px",
        {
          lineHeight: "110%",
          fontWeight: "700",
        },
      ],
      "heading2-bold": [
        "40px",
        {
          lineHeight: "120%",
          fontWeight: "700",
        },
      ],
      "heading1-semibold": [
        "36px",
        {
          lineHeight: "140%",
          fontWeight: "600",
        },
      ],
      "heading2-semibold": [
        "32px",
        {
          lineHeight: "130%",
          fontWeight: "600",
        },
      ],
      "btn-text": [
        "14px",
        {
          lineHeight: "140%",
          fontWeight: "700",
        },
      ],
      "btn-text-2": [
        "24px",
        {
          lineHeight: "110%",
          fontWeight: "600",
        },
      ],
      "text-1": [
        "15px",
        {
          fontWeight: "600",
        },
      ],
      
      "content-text": [
        "24px",
        {
          lineHeight: "140%",
          fontWeight: "500",
        },
      ],
    },
    extend: {
      colors: {
        "dark1" : "#030303",
        "dark2" : "#363636",
        "light" : "#F4F5F5",
        "purple": "#6C43EC",
      },
    },
  },
  plugins: [],
}
export default config
