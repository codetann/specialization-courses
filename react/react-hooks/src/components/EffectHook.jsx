import React, { useEffect, useState } from "react";
import { Input, HStack, Button, Text, VStack } from "@chakra-ui/react";
import ImageToggle from "./ImageToggle";

const IMAGES = ["red", "orange", "yellow", "green", "blue", "purple"];

export default function EffectHook() {
  return (
    <VStack spacing="10rem" margin="5rem">
      {IMAGES.map((img) => (
        <ImageToggle key={img} color={img} />
      ))}
    </VStack>
  );
}
