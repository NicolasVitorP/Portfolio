
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1976D2',
                    hover: '#1565C0', // Darker shade for hover
                    light: '#42A5F5', // Lighter shade for accents
                },
                error: '#D32F2F',
                success: '#388E3C',
                warning: '#F57C00',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'gradient': 'gradient 8s ease infinite',
            },
        },
    },
    plugins: [],
}
