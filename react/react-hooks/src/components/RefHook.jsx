import React, { useRef, useState } from "react";
import { Input, HStack, Button, Text, VStack } from "@chakra-ui/react";

export default function RefHook() {
  const imgRef = useRef(null);

  const handleMouseOver = () => (imgRef.current.style.opacity = ".5");
  const handleMouseOut = () => (imgRef.current.style.opacity = "1");
  return (
    <div>
      <img
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        ref={imgRef}
        style={{ transition: ".3s" }}
        src="./static/image1.jfif"
        alt="img"
      />
    </div>
  );
}
