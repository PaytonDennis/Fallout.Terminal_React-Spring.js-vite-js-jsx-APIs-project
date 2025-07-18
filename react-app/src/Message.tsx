import React, { useEffect, useState } from "react";
import earthGif from "./assets/Rotating_earth_animated_transparent.gif";

function Message() {
  const [oopMessage, setOopMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:8080/api/oop-message")
      .then((res) => res.text())
      .then((msg) => setOopMessage(msg))
      .catch(() => setOopMessage("Error fetching message"));
  }, []);

  return (
    <div>
      <h1>Current Output</h1>
      <img
        src={earthGif}
        alt="Rotating Earth"
        style={{ width: "200px", display: "block", margin: "16px auto" }}
      />
      <p>{oopMessage}</p>
    </div>
  );
}

export default Message;
