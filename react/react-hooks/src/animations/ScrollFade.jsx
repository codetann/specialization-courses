import React, { useRef, useState, useEffect } from "react";
import { SlideFade, ScaleFade } from "@chakra-ui/react";

export default function ScrollFade({ children, offsetX = "0", offsetY = "0" }) {
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
    <SlideFade in={inView} offsetY={offsetY} offsetX={offsetX}>
      {children}
      <div ref={ref} />
    </SlideFade>
  );
}
