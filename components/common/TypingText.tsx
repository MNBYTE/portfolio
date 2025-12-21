"use client";
import { useEffect, useState } from "react";

export default function TypingText({ text }: { text: string }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 80);
  }, [text]);

  return <span>{display}</span>;
}
