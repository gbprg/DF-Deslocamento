import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#40B5AD",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#2e2e2e",
    },
    common: {
      black: "#000",
      white: "#fff",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});
