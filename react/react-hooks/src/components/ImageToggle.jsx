import React, { useRef, useState, useEffect } from "react";
import useView from "../hooks/useView";
import { SlideFade, ScaleFade } from "@chakra-ui/react";

export default function ImageToggle({ color }) {
  const [inView, setInView] = useState(false);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);

  const isInView = () => {
    const rect = ref.current.getBoundingClientRect();

    return rect.bottom <= window.innerHeight;
  };

  const scrollHandler = () => {
    setInView(isInView());
  };

  useEffect(() => {
    setLoading(false);
    setInView(isInView);
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <SlideFade in={inView} offsetY="30px" offsetX="40px">
      <div
        ref={ref}
        style={{
          height: "20rem",
          width: "20rem",
          opacity: inView ? "1" : "0",
          transition: ".5s",
          background: color,
        }}
      ></div>
    </SlideFade>
  );
}
