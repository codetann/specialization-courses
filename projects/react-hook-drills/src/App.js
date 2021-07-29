import React from "react";
import { Flex } from "@chakra-ui/react";
// components
import AppOne from "./components/AppOne/AppOne";
import AppTwo from "./components/AppTwo/AppTwo";
import AppThree from "./components/AppThree/AppThree";

function App() {
  return (
    <Flex maxW="100vw" minH="100vh" justify="center" align="flex-start">
      <AppThree />
    </Flex>
  );
}

export default App;
