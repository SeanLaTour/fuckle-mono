import * as React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import Home from "../components/home";

const IndexPage = () => {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
};

export default IndexPage;
