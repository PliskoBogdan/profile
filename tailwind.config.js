/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          light: "#a7f3d0", // Светло-зелёный
          default: "#10b981", // Основной зелёный
          dark: "#047857", // Тёмно-зелёный
        },
        black: {
          light: "#737373", // Светло-чёрный (тёмно-серый)
          default: "#000000", // Основной чёрный
          dark: "#0a0a0a", // Глубокий чёрный
        },
        white: {
          default: "#ffffff", // Белый для контраста
        },
      },
    },
  },
  plugins: [],
};
