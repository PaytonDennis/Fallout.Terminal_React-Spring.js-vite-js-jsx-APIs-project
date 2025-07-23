import React, { useEffect, useState } from "react";
import earthGif from "./assets/Rotating_earth_animated_transparent.gif";
import falloutGif from "./assets/Fallout Vault Dweller Sticker by Amazon Prime Video.gif";

function Message() {
  const [oopMessage, setOopMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:8080/api/message")
      .then((res) => res.text())
      .then((msg) => setOopMessage(msg))
      .catch(() => setOopMessage("Error fetching message"));
  }, []);

  return (
    <div>
      <h1>Current Output</h1>
      <div
        style={{
          position: "relative",
          width: 200,
          height: 200,
          margin: "16px auto",
        }}
      >
        <img
          src={earthGif}
          alt="Rotating Earth"
          style={{ width: 200, height: 200, display: "block", margin: 0 }}
        />
        <img
          src={falloutGif}
          alt="Fallout Animated Sticker"
          style={{
            width: 180,
            height: 180,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
      <p>{oopMessage}</p>
    </div>
  );
}

export default Message;
