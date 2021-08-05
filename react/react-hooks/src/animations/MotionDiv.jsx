import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, VStack } from "@chakra-ui/react";

export default function MotionDiv() {
  const [toggle, setToggle] = useState(false);
  const [scale, setScale] = useState(1);

  const handleToggle = () => setToggle(!toggle);

  return (
    <VStack>
      <Button onClick={handleToggle}>{toggle ? "Pull" : "Push"}</Button>
      <motion.div
        animate={{ y: toggle ? 400 : 0 }}
        style={{ height: "20rem", width: "20rem", background: "teal" }}
      ></motion.div>
      <motion.div
        onHoverStart={() => setScale(1.5)}
        onHoverEnd={() => setScale(1)}
        animate={{ scale: scale }}
        style={{ height: "20rem", width: "20rem", background: "yellow" }}
      ></motion.div>
    </VStack>
  );
}
