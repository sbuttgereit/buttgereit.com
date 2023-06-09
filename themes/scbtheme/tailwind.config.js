/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "content/**/*.html", "../../content/**/*.md", "../../content/**/*.html", "layouts/**/*.html", "../../layouts/**/*.html"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif']
    }
  },
  plugins: [],
}

