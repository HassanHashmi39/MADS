/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                tomato: ['"Tomato Grotesk"', '"Space Grotesk"', 'sans-serif'],
            }
        },
    },

    plugins: [],
};
