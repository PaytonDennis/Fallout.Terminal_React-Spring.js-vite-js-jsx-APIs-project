import earthGif from "./assets/Rotating_earth_animated_transparent.gif";

function Message() {
  return (
    <div>
      <h1>Message Component</h1>
      <img
        src={earthGif}
        alt="Rotating Earth"
        style={{ width: "200px", display: "block", margin: "16px auto" }}
      />
      <p>This is a simple message component.</p>
    </div>
  );
}

export default Message;
