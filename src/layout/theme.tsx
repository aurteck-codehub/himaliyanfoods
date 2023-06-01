"use client";

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    darkPurple: {
      50: "#8A82FF",
      100: "#736AFF",
      200: "#5D5AFF",
      300: "#4635FF",
      400: "#300FFF",
      500: "#1A00FF",
      600: "#1400CC",
      700: "#0E0099",
      800: "#080066",
      900: "#020033",
      gradient: "linear-gradient(135deg, #6300C7, #000E25)",
    },
    neonBlue: {
      100: "#04d9ff",
      200: "#00A6F5",
    },
  },
  styles: {
    global: {
      body: {
        bg: "darkPurple.gradient",
        color: "gray.50",
      },
    },
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  components: {
    Link: {
      baseStyle: {
        fontSize: "sm",
        fontWeight: "semibold",
        textTransform: "uppercase",
        borderBottom: "2px solid",
        borderColor: "transparent",
        paddingInline: "3px",
        paddingBottom: "2px",
      },
      variants: {
        underline: {
          _hover: {
            textDecoration: "none",
            backgroundColor: "transparent",
            borderBottom: "3px solid",
            borderColor: "neonBlue.100",
            paddingBottom: "2px",
          },
        },
      },
    },
    Button: {
      baseStyle: {},
      variants: {
        primary: {
          backgroundColor: "neonBlue.200",
          _hover: {
            textDecoration: "none",

            color: "neonBlue.100",
            backgroundColor: "transparent",
            border: "3px solid",
            borderColor: "neonBlue.100",
            // paddingBottom: "2px",
          },
        },
        secondary: {
          backgroundColor: "darkPurple.100",
          _hover: {
            textDecoration: "none",
            color: "white",
            borderBottom: "3px solid",
            borderColor: "blue.400",
            paddingBottom: "2px",
          },
        },
        link: {
          backgroundColor: "transparant",
          color: "white",
          _hover: {
            textDecoration: "none",
            color: "neonBlue.100",
            border: "1px solid",
            borderColor: "neonBlue.100",
            padding: "2",
          },
        },
        link2: {
          backgroundColor: "transparant",
          color: "white",

          _hover: {
            textDecoration: "none",
            color: "pink.100",
            border: "1px solid",
            borderColor: "pink.100",
            padding: "4",
          },
        },
      },
    },
    Card: {
      baseStyle: {
        borderWidth: "4px",
        borderColor: "white",
        backgroundColor: "transparent",
        borderRadius: "md",
        color: "white",
        boxShadow: "5 5 10 darkPurpal.100",
        textShadow: "2 2 5 white",
        _hover: {
          animation: "neon-border 1s ease-in infinite alternate",
        },
      },
      variants: {
        outline: {
          borderWidth: "2px",
          borderColor: "neonBlue.200",
          boxShadow: "solid 2px",
        },
      },
    },
  },
});

export default theme;
