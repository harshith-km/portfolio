/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // New purple and white color palette
        primary: {
          DEFAULT: "#5b21b6", // Deep purple
          light: "#7c3aed",   // Medium purple
          dark: "#4c1d95",    // Darker purple
        },
        secondary: {
          DEFAULT: "#e9d5ff", // Light purple
          light: "#f3e8ff",   // Very light purple
          dark: "#c4b5fd",    // Medium light purple
        },
        accent: {
          DEFAULT: "#8b5cf6", // Vibrant purple
          light: "#a78bfa",   // Lighter purple
          dark: "#7c3aed",    // Darker purple
        },
        tertiary: "#f5f3ff",  // Very light purple for sections
        lightText: "#ffffff", // White for text
        darkText: "#6b7280",  // Gray for secondary text
        success: "#10b981",   // Emerald green for success states
        warning: "#f59e0b",   // Amber for warnings
        error: "#ef4444",     // Red for errors
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to right bottom, rgba(91, 33, 182, 0.9), rgba(124, 58, 237, 0.8)), url("/src/assets/bg-pattern.png")',
      },
      boxShadow: {
        'custom': '0 10px 30px -10px rgba(91, 33, 182, 0.3)',
      },
    },
  },
  plugins: [],
} 