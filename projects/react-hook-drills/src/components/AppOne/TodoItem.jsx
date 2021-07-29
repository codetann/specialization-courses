import React, { useState } from "react";
import { HStack, IconButton, Text, Spacer } from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";

export default function TodoItem({ id, text, setList }) {
  const [isChecked, setIsChecked] = useState(false);

  // event-handler functions
  const handleChecked = () => setIsChecked(!isChecked);
  const handleDelete = () =>
    setList((prevState) => prevState.filter((item) => item.id !== id));

  // derived state
  const opacity = isChecked ? 0.5 : 1;
  const textDecor = isChecked ? "line-through" : "none";
  const checkIcon = isChecked ? <CheckIcon /> : "";

  return (
    <HStack m="2rem 0 0 0" w={[300, 400, 600]}>
      <IconButton color="green.300" onClick={handleChecked} icon={checkIcon} />
      <Text opacity={opacity} textDecor={textDecor}>
        {text}
      </Text>
      <Spacer />
      <IconButton
        onClick={handleDelete}
        color="red.300"
        bg="none"
        icon={<DeleteIcon />}
      />
    </HStack>
  );
}
