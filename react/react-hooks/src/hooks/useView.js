import React, { useState, useEffect, useRef } from "react";

export default function useView(url) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  const isInView = () => {
    const rect = ref.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const scrollHandler = () => {
    setInView(isInView());
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return [ref, inView];
}
