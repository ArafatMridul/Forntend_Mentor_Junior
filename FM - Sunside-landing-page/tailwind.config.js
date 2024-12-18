/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                softRed: "hsl(7, 99%, 70%)",
                yellow: "hsl(51, 100%, 49%)",
                graphic: "hsl(167, 40%, 24%)",
                photography: "hsl(198, 62%, 26%)",
                footer: "hsl(168, 34%, 41%)",
                "blue-1": "hsl(210, 4%, 67%)",
                "blue-2": "hsl(232, 10%, 55%)",
                "blue-3": "hsl(213, 9%, 39%)",
                "blue-4": "hsl(212, 27%, 19%)",
            },
            fontFamily: {
                barlow: ["Barlow", "serif"],
                fraunces: ["Fraunces", "serif"],
            },
            fontWeight: {
                "fw-barlow": 600,
                "fw-fraunces-normal": 700,
                "fw-fraunces-bold": 900,
            },
        },
    },
    plugins: [],
};
