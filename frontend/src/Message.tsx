import React from "react";
import terminalVideo from "./assets/terminal.mp4";

function Message() {
  return (
    <div
      style={{
        position: "fixed",
        top: "60px", // height of navbar, adjust if needed
        left: 0,
        width: "100%",
        height: "calc(100vh - 60px)",
        overflow: "hidden",
        zIndex: -1,
      }}
    >
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
        }}
      />
    </div>
  );
}

export default Message;
