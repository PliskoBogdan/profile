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
        mainBg: '#101010',
        green: {
          light: "#a7f3d0", // Светло-зелёный
          default: "#10b981", // Основной зелёный
          dark: "#047857", // Тёмно-зелёный
        },
        grey: {
          100: '#4f4f4f',
          150: '#272727',
          200: '#1E1E1E',
          300: '#313131'
        },
        black: {
          500: '#212123'
        },
        yellow: {
          200: '#fada78',
          300: '#cdad4a'
        },
        white: {
          default: "#ffffff", // Белый для контраста
          text: '#dedede'
        },
      },
    },
  },
  plugins: [],
};
