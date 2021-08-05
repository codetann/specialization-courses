import React from "react";
import { IconButton, Text, Box, HStack } from "@chakra-ui/react";
import { AddIcon, MinusIcon, RepeatIcon } from "@chakra-ui/icons";
import { useAppContext } from "../context/Provider";

export default function ReducerHook() {
  const { counter } = useAppContext();

  const handleInc = () => counter.inc();
  const handleDec = () => counter.dec();
  const handleReset = () => counter.reset();

  return (
    <HStack>
      <IconButton onClick={handleInc} icon={<AddIcon />} />
      <Box>
        <Text>{counter.state}</Text>
      </Box>
      <IconButton onClick={handleDec} icon={<MinusIcon />} />
      <IconButton onClick={handleReset} icon={<RepeatIcon />} />
    </HStack>
  );
}
