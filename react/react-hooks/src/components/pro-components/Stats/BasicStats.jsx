import React from "react";
import { VStack, Text, Heading, HStack, Flex, Stack } from "@chakra-ui/react";

const INFO = [
  { id: 1, title: "Total Subscribers", data: "71,897" },
  { id: 2, title: "Avg. Open Rate", data: "58.16%" },
  { id: 3, title: "Avg. Click Rate", data: "24.57%" },
  { id: 4, title: "Avg. View Rate", data: "55.57%" },
];

export default function BasicStats() {
  return (
    <VStack align="center" spacing="2rem" w={[300, 500, 700, 900]}>
      <Heading size="md">Last 30 days</Heading>
      <Stack
        direction={["column", "column", "row"]}
        spacing="2rem"
        shouldWrapChildren
      >
        {INFO.map((i) => (
          <Card title={i.title} data={i.data} />
        ))}
      </Stack>
    </VStack>
  );
}

const Card = ({ title, data }) => (
  <Flex
    w={[300, "md", 250]}
    h="7rem"
    borderRadius=".5rem"
    bg="gray.700"
    align="center"
    justify="start"
    p="0 0 0 2rem"
  >
    <VStack spacing="1" align="left">
      <Text colorScheme="blackAlpha" color="gray.300">
        {title}
      </Text>
      <Heading>{data}</Heading>
    </VStack>
  </Flex>
);
