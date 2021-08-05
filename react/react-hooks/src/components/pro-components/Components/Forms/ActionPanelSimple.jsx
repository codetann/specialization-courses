import React from "react";
import {
  Heading,
  Text,
  Button,
  VStack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

export default function ActionPanelSimple() {
  // colors
  const bg = useColorModeValue("white", "gray.700");
  const text = useColorModeValue("gray.400", "gray.300");
  // flex
  const justifyAlign = { base: "center", sm: "flex-start" };
  const textAlign = { base: "center", sm: "left" };

  return (
    <VStack bg={bg} shadow="md" spacing="2rem" p="2rem" borderRadius="md">
      {/* info section */}
      <Flex direction="column" alignItems={justifyAlign} justify={"center"}>
        <Heading marginBottom=".5rem" size="md">
          Delete your account?
        </Heading>
        <Text textAlign={textAlign} size="sm" color={text}>
          Once you delete your account, you will lose all data associated with
          it.
        </Text>
      </Flex>

      {/* button section */}
      <Flex w="100%" justify={justifyAlign}>
        <Button fontSize="sm" colorScheme="red">
          Delete account
        </Button>
      </Flex>
    </VStack>
  );
}
