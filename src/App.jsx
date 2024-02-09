import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "services/queryClient";

function App() {
  return <ChakraProvider theme={theme}>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </BrowserRouter>
  </ChakraProvider>;
}

export default App;
