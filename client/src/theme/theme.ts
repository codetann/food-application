import { extendTheme } from "@chakra-ui/react";

const config: any = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors: any = {
  brand: {
    900: "#1a365d",
  },
};

const theme = extendTheme({
  config,
  colors,
});

export { theme };
