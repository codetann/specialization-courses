import React from "react";
import { Link } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import useFetch from "../../hooks/useFetch";

export default function Home() {
  const [pokemon, status] = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  );

  if (status !== "LOADED") return <p>loading</p>;
  return (
    <VStack m="2rem 0 0 0 " w="100%" maxW="400px">
      {pokemon &&
        pokemon.results.map((p, i) => (
          <Link to={`/pokemon/${p.name}/${i + 1}`} key={p.name}>
            {p.name}
          </Link>
        ))}
    </VStack>
  );
}
