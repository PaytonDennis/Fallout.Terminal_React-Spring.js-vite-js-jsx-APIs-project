import "./App.css";
import Navbar from "./Navbar";
import dogtownLogo from "./assets/DOGTOWN_ARMAMENTS.jpg";
import IntegratedTerminal from "./IntegratedTerminal";

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
        {/* Dogtown logo */}
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

        {/* Terminal container */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IntegratedTerminal />
        </div>
      </div>
    </div>
  );
}

export default App;
