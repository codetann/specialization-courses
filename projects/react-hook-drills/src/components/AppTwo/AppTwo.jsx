import React, { useState } from "react";
import { VStack } from "@chakra-ui/react";
import useFetch from "../../hooks/useFetch";

export default function AppOne() {
  const [pokemon, status] = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  );

  if (status !== "LOADED") return <p>loading</p>;
  return (
    <VStack m="2rem 0 0 0 " w="100%" maxW="400px">
      {pokemon && pokemon.results.map((p) => <p key={p.name}>{p.name}</p>)}
    </VStack>
  );
}
