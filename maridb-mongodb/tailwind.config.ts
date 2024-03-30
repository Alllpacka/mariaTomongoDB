import type {Config} from "tailwindcss";

const {nextui} = require("@nextui-org/react");

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
        darkMode: "class",
        plugins: [nextui()],
    },
    plugins: [nextui({
        themes: {
            light: {
                colors: {
                    background: "#FFFFFF",
                    foreground: "#010d0e",
                    primary: {
                        DEFAULT: '#d015c9'
                    },
                    secondary: {
                        DEFAULT: '#05d4eb',
                        foreground: '#010d0e'
                    },
                },
            },
            dark: {
                colors: {
                    background: "#000000",
                    foreground: "#d9f8fc",
                    primary: {
                        DEFAULT: '#d015c9'
                    },
                    secondary: {
                        DEFAULT: '#05d4eb',
                        foreground: '#010d0e'
                    },
                },
            },
            "mocha": {
                extend: "dark",
                colors: {
                    background: "#181825",
                    foreground: "#cdd6f4",
                    primary: {
                        DEFAULT: "#cba6f7",
                        foreground: "#11111b",
                    },
                    secondary: {
                        DEFAULT: "#89dceb",
                        foreground: "#11111b",
                    },
                    danger: {
                        DEFAULT: "#f38ba8",
                        foreground: "#11111b",
                    },
                    warning: {
                        DEFAULT: "#f9e2af",
                        foreground: "#11111b",
                    },
                    success: {
                        DEFAULT: "#a6e3a1",
                        foreground: "#11111b",
                    },
                    default: {
                        100: "#11111b",
                        200: "#1e1e2e",
                        300: "#313244",
                        DEFAULT: "#45475a",
                        foreground: "#cdd6f4",
                    },
                    content1: {
                        DEFAULT: "#1e1e2e",
                    },
                    content2: {
                        DEFAULT: "#313244",
                    },
                    content3: {
                        DEFAULT: "#45475a",
                    },
                    content4: {
                        DEFAULT: "#585b70",
                    },
                },
            },
            "latte": {
                extend: "light",
                colors: {
                    background: "#e6e9ef",
                    foreground: "#4c4f69",
                    primary: {
                        DEFAULT: "#8839ef",
                        foreground: "#dce0e8",
                    },
                    secondary: {
                        DEFAULT: "#04a5e5",
                        foreground: "#dce0e8",
                    },
                    danger: {
                        DEFAULT: "#d20f39",
                        foreground: "#dce0e8",
                    },
                    warning: {
                        DEFAULT: "#df8e1d",
                        foreground: "#dce0e8",
                    },
                    success: {
                        DEFAULT: "#40a02b",
                        foreground: "#dce0e8",
                    },
                    default: {
                        100: "#ccd0da",
                        200: "#bcc0cc",
                        300: "#acb0be",
                        DEFAULT: "#bcc0cc",
                        foreground: "#4c4f69",
                    },
                    content1: {
                        DEFAULT: "#eff1f5",
                    },
                    content2: {
                        DEFAULT: "#ccd0da",
                    },
                    content3: {
                        DEFAULT: "#bcc0cc",
                    },
                    content4: {
                        DEFAULT: "#acb0be",
                    },
                },
            },
        },
    }),
    ],

};
export default config;
