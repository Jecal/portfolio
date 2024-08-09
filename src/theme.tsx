import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light", // Set the initial color mode (light or dark)
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "dark" ? "#1f1f1f" : "#fff", // Change these colors to your preference
        color: props.colorMode === "dark" ? "fff" : "1f1f1f", // Adjust text color as needed
      },
    }),
  },
  fonts: {
    body: "'Open Sans', sans-serif", // Default font for body text
    heading: "'Poppins', sans-serif", // Default font for headings
    mono: "'Menlo', monospace", // Default font for monospaced text
  },
});

export default theme;
