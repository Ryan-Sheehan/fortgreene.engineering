import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: ["EB Garamond", "serif"],
      },
      colors: {
        inherit: "inherit",
        transparent: "transparent",
        current: "currentColor",
        black: "var(--black)",
      },
    },
  },
  plugins: [],
} satisfies Config;
