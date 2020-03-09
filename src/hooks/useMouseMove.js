import { useEffect, useState } from "react";

export function useMouseMove() {
  const [coords, setCoords] = useState({ x: null, y: null });
  useEffect(() => {
    const handleMouseMove = e => {
      setCoords({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return coords;
}
