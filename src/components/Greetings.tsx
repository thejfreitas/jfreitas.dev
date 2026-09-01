"use client";

import { useEffect, useState } from "react";

export function Greetings() {
  const greetings = ["Hello", "Hola", "Howdy", "Olá", "Bonjour"];
  const [currentGreetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const maxIndex = greetings.length - 1;

    const interval = setInterval(() => {
      setGreetingIndex(
        currentGreetingIndex < maxIndex ? currentGreetingIndex + 1 : 0,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentGreetingIndex, greetings.length]);

  return (
    <p className="greetings">
      <span className="emoji">👋</span>
      <span
        className="greeting"
        data-greeting={greetings[currentGreetingIndex]}
      >
        {greetings[currentGreetingIndex]}, my name is
      </span>
    </p>
  );
}
