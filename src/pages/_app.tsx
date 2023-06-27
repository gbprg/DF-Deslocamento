import { theme } from "@/theme";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  )
}

