"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mx = 0, my = 0;
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    outer.style.display = "block";
    inner.style.display = "block";

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      inner.style.left = mx + "px";
      inner.style.top = my + "px";
      setTimeout(() => {
        outer.style.left = mx + "px";
        outer.style.top = my + "px";
      }, 80);
    };

    const addHover = (e: Event) => outer.classList.add("hovered");
    const removeHover = (e: Event) => outer.classList.remove("hovered");

    document.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, .card, [data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      document.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div ref={outerRef} className="cursor-outer" style={{ display: "none" }} />
      <div ref={innerRef} className="cursor-inner" style={{ display: "none" }} />
    </>
  );
}
