/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
    theme: {
        extend: {
            colors: {
                "calculator-bg": "rgba(34,31,33,255)",
                "number-bg": "rgba(64,56,59,255)",
                "operator-bg": "rgba(58,47,49,255)",
            },
        },
    },
    plugins: [],
};
