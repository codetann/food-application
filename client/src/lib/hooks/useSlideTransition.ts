import { useState, useEffect } from "react";

function useSlideTransition(length: number, delay: number) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % length);
    }, delay);

    return () => clearInterval(interval);
  }, [length, delay]);

  return index;
}

export { useSlideTransition };
