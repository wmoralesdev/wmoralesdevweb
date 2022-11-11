/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
        },
        extend: {
            letterSpacing: {
                normal: '0.2rem',
            },
            colors: {
                walter: '#8b5cf6',
            },
        },
    },
    plugins: [],
};
