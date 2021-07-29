import React from "react";
import { HStack, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export default function Pokemon() {
  const { name, id } = useParams();

  return (
    <HStack>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        alt="pokemon"
      />
      <Heading>{name}</Heading>
    </HStack>
  );
}
