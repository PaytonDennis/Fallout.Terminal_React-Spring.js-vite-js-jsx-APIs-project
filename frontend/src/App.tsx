import "./App.css";
import Navbar from "./Navbar";
import Message from "./Message";
import dogtownLogo from "./assets/DOGTOWN_ARMAMENTS.jpg";

function App() {
  return (
    <div>
      <Navbar />
      <div
        style={{
          width: "50vw",
          height: "calc(100vh - 56px)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={dogtownLogo}
          alt="Dogtown Armaments Logo"
          style={{
            width: "50vw",
            height: "fit-content",
            objectFit: "cover",
            position: "absolute",
            top: 120,
            left: -10,
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            color: "#00ff00",
            textShadow:
              "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
            width: "100%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Message />
        </div>
      </div>
    </div>
  );
}

export default App;
