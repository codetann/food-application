import App from "./App";
import "./index.css";
import ReactDOM from "react-dom/client";
import { theme } from "@theme";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
