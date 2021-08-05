import React from "react";
import { Flex, Box } from "@chakra-ui/react";
// components
import ReducerHook from "./components/ReducerHook";
import ContactSection from "./components/pro-components/Contact/ContactSection";
import BasicStats from "./components/pro-components/Stats/BasicStats";
import ActionPanelSimple from "./components/pro-components/Components/Forms/ActionPanelSimple";

function App() {
  return (
    <Flex {...styles.FLEX}>
      <ContactSection />
    </Flex>
  );
}

export default App;

const styles = {
  FLEX: {
    maxWidth: "100vw",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
  },
};
