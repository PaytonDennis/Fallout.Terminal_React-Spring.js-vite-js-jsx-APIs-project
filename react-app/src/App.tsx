import "./App.css";
import Navbar from "./Navbar";
import Message from "./Message";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: 60 }}>
        <Message />
      </div>
    </div>
  );
}

export default App;
