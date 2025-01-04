import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "white": "#ffffff",
      "black": "#171717",
      "red": "var(--red)",
      "green": "var(--green)",
      "rose-50": "var(--rose-50)",
      "rose-100": "var(--rose-100)",
      "rose-300": "var(--rose-300)",
      "rose-400": "var(--rose-400)",
      "rose-500": "var(--rose-500)",
      "rose-900": "var(--rose-900)",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            img: {
              borderRadius: '0.5rem', // Add rounded corners
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add shadow
              maxWidth: '100%', // Ensure images are responsive
              display: 'block', // Center images with margin auto
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '0',
              marginBottom: '0'
            },



          },
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
