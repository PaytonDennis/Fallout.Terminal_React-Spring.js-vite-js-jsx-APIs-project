import { useState, useEffect } from "react";

type TypingProps = {
  text: string;
  speed?: number;
  onComplete?: () => void;
};

export default function TypingText({
  text,
  speed = 50,
  onComplete,
}: TypingProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i]);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        onComplete && onComplete();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p className="text-green-400 font-mono">{displayed}</p>;
}
