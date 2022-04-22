import { extendTheme } from "@chakra-ui/react";

const config: any = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors: any = {
  brand: {
    orange: "#FF8F66",
    purple: "#7C5ACB",
    darkPurple: "#3E206D",
  },
};

const theme = extendTheme({
  config,
  colors,
});

export { theme };
