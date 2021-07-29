import React from "react";
import { VStack } from "@chakra-ui/react";
import TodoItem from "./TodoItem";

/**
 * <TodoList />
 * - Component only used to display the to do list items.
 */
export default function TodoList({ list, setList }) {
  return (
    <VStack w={[300, 400, 600]} spacing="2rem">
      {list.map((item) => (
        <TodoItem
          key={item.id}
          setList={setList}
          id={item.id}
          text={item.text}
        />
      ))}
    </VStack>
  );
}
