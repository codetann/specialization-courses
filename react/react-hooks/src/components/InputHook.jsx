import React, { useState } from "react";
import { Input, HStack, Button, Text, VStack } from "@chakra-ui/react";

export default function InputHook() {
  const [text, setText] = useState("");
  const [history, setHistory] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
    setHistory([...history, e.target.value]);
  };

  return (
    <VStack>
      <Text>{text}</Text>
      <HStack>
        <Input type="text" onChange={handleChange}></Input>
        <Button>Alert</Button>
      </HStack>
    </VStack>
  );
}
