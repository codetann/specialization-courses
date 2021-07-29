import React, { useState } from "react";
import { Input, IconButton, HStack } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { v4 as uuid } from "uuid";

export default function TodoInput({ setList }) {
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    setList((prevState) => [...prevState, { id: uuid(), text }]);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack w={[300, 400, 600]}>
        <Input w="100%" type="text" value={text} onChange={handleChange} />
        <IconButton onClick={handleSubmit} icon={<AddIcon />} />
      </HStack>
    </form>
  );
}
