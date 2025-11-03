/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "flowbite-react/tailwind",
    ],
    theme: {
        extend: {
            height: {
                "full-minus-4.25rem": "calc(100vh - 4.25rem)",
            },
            spacing: {
                17: "4.25rem",
                18: "4.5rem",
                19: "4.75rem",
            },
            colors: {
                primary: {
                    DEFAULT: "#0000C4",
                    dark: "#000054",
                },
                accent: "#FF3C1A",
                text: "#111111",
                background: "#F1F1F1",
            },
            fontFamily: {
                sans: [
                    "Poppins",
                    "system-ui",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "Helvetica Neue",
                    "Arial",
                    "sans-serif",
                ],
            },
            keyframes: {
                "fade-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                "fade-in-up": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(20px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
            },
            animation: {
                "fade-in": "fade-in 0.6s ease-out forwards",
                "fade-in-up": "fade-in-up 0.6s ease-out forwards",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: ["flowbite-react/tailwind"],
};
