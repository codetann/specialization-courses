import React, { useState } from "react";
import { VStack } from "@chakra-ui/react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function AppOne() {
  const [list, setList] = useState([]);

  return (
    <VStack m="2rem 0 0 0 " w="100%" maxW="400px">
      <TodoInput setList={setList} />
      <TodoList setList={setList} list={list} />
    </VStack>
  );
}
