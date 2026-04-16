import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glass: "0 12px 42px rgba(0,0,0,0.28)"
      }
    }
  },
  plugins: []
} satisfies Config;
