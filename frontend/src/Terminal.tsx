import { useState } from "react";
import TypingText from "./TypingText";

export default function Terminal() {
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // store command in history
    setHistory([...history, `> ${input}`]);

    // clear input
    setInput("");
  };

  return (
    <div className="bg-black text-green-400 font-mono p-4 h-screen overflow-y-auto">
      <div>
        {history.map((line, i) => (
          <TypingText key={i} text={line} />
        ))}
      </div>

      {/* Input line */}
      <form onSubmit={handleSubmit} className="flex">
        <span className="text-green-400">{">"}</span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-black text-green-400 outline-none ml-2 flex-1"
          autoFocus
        />
      </form>
    </div>
  );
}
