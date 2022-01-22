import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
    },
    fonts: {
        heading: "consolas",
        body: "consolas",
    },
    colors: {
        dracula: "#353746",
        primary: {
            50: "#e2efff",
            100: "#b6cefe",
            200: "#88adf8",
            300: "#5a8cf2",
            400: "#2c6ced",
            500: "#1252d3",
            600: "#0a40a5",
            700: "#042e77",
            800: "#001b4a",
            900: "#00091e",
        },
        gray: {
            50: "#fafafa",
            100: "#f5f5f5",
            200: "#e5e5e5",
            300: "#d4d4d4",
            400: "#a3a3a3",
            500: "#737373",
            600: "#525252",
            700: "#404040",
            800: "#262626",
            900: "#171717",
        },
    },
    styles: {
        global: {
            "html,body,#__next": {
                minH: "100vh",
                h: "100%",
                bg: "gray.900",
                color: "whiteAlpha.900",
            },
        },
    },
});

export default theme;
