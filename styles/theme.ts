import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    purple: {
      "50": "#9875FB",
      "90": "#1B0F25",
    },
    danger: {
      "50": "#E73F5D",
      "60": "#dc3b59",
    },
    pink: {
      "20": "#D67EE2",
      "50": "#E559F9",
    },
  },

  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "purple.90",
        color: "white",
      },
    },
  },
});
