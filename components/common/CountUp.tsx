"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function CountUp({ end }: { end: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setCount(i);
      if (i >= end) clearInterval(interval);
    }, 20);
  }, [inView, end]);

  return <span ref={ref}>{count}</span>;
}
