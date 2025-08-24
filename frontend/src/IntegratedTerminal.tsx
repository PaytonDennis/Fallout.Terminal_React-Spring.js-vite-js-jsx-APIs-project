// IntegratedTerminal.tsx
import React, { useEffect, useState } from "react";
import terminalVideo from "./assets/terminal.mp4";
import TypingText from "./TypingText";

function IntegratedTerminal() {
  const [oopMessage, setOopMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:8080/api/message")
      .then((res) => res.text())
      .then((msg) => setOopMessage(msg))
      .catch(() => setOopMessage("Error fetching message"));
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: "60px", // height of navbar
        left: 0,
        width: "100%",
        height: "calc(100vh - 60px)",
        overflow: "hidden",
        zIndex: -1,
      }}
    >
      {/* Cursor cover */}
      <div
        style={{
          position: "absolute",
          top: "14%",
          left: "36.2%",
          width: "2%",
          height: "2%",
          backgroundColor: "black",
          zIndex: 0,
        }}
      ></div>

      {/* Background video */}
      <video
        src={terminalVideo}
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
        }}
      />

      {/* Terminal text with typewriter effect */}
      <div
        style={{
          position: "absolute",
          top: "12.5%",
          left: "19.5%",
          width: "45%",
          color: "#00ff00",
          fontFamily: "monospace",
          fontSize: "clamp(1rem, 2vw, 1.5rem)",
          whiteSpace: "pre-wrap",
        }}
      >
        <TypingText text={`>${oopMessage}`} />

        {/* Blinking cursor */}
        <span
          style={{
            display: "inline-block",
            width: "10px",
            height: "0.8em",
            backgroundColor: "#00ff00",
            marginLeft: "2px",
            animation: "blink 1s steps(1) infinite",
          }}
        ></span>
      </div>

      {/* Cursor blink animation */}
      <style>
        {`
          @keyframes blink {
            50% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
}

export default IntegratedTerminal;
