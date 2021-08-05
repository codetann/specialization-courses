import React, { useState } from "react";
import {
  Heading,
  Text,
  Input,
  FormControl,
  FormLabel,
  HStack,
  VStack,
  Spacer,
  Textarea,
  Button,
  Switch,
  Stack,
} from "@chakra-ui/react";

export default function ContactSection() {
  const [isSelected, setIsSelected] = useState(false);
  const [form, setForm] = useState({
    first: "",
    last: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  /**
   * eventhandler functions
   * - refacfor state and functions if needed
   * -
   */
  const handleSwitch = () => setIsSelected(!isSelected);
  const handleChange = (e) => {
    const id = e.target.id;

    setForm((prevState) => {
      return { ...prevState, [id]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some((i) => !i))
      return alert("Please enter all required fields.");
  };

  return (
    <VStack spacing="3rem" w={["sm", "md", "lg", "xl"]}>
      <VStack spacing="1rem">
        <Heading>Contact sales</Heading>
        <Text color="gray.300" maxW="xl" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
          ratione aliquam quo? Dolorum, eos perferendis harum labore molestias.
        </Text>
      </VStack>

      {/* FORM SECTION */}

      <form onSubmit={handleSubmit}>
        <VStack spacing="1.5rem">
          {/* name row */}
          <Stack direction={["column", "row"]} w={"100%"}>
            <FormControl id="first" isRequired>
              <FormLabel>First name</FormLabel>
              <Input value={form.first} onChange={handleChange} type="text" />
            </FormControl>
            <Spacer />
            <FormControl id="last" isRequired>
              <FormLabel>Last name</FormLabel>
              <Input value={form.last} onChange={handleChange} type="text" />
            </FormControl>
          </Stack>
          {/* company row */}
          <FormControl id="company" isRequired>
            <FormLabel>Company</FormLabel>
            <Input value={form.company} onChange={handleChange} type="text" />
          </FormControl>
          {/* email row */}
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input value={form.email} onChange={handleChange} type="email" />
          </FormControl>
          {/* phone row */}
          <FormControl id="phone" isRequired>
            <FormLabel>Phone</FormLabel>
            <Input value={form.phone} onChange={handleChange} type="tel" />
          </FormControl>
          {/* message row */}
          <FormControl id="message" isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea
              value={form.message}
              onChange={handleChange}
              minH="container.xs"
              type="text"
            />
          </FormControl>
          {/* privaty policy */}
          <HStack w="100%" spacing="1rem">
            <Switch onChange={handleSwitch} />
            <Text color="gray.300" size="xs">
              By Selecting this, you agree to the Privacy Policy and Cookie
              Policy
            </Text>
          </HStack>
          {/* submit button */}
          <FormControl id="submit">
            <Button
              onClick={handleSubmit}
              isDisabled={!isSelected}
              w="100%"
              colorScheme="blue"
            >
              Lets Talk!
            </Button>
          </FormControl>
        </VStack>
      </form>
    </VStack>
  );
}
