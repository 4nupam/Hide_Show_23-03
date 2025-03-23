import { useState } from "react";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(false);

  const handleshow = () => {
    setShow(!show);
  };
  return (
    <div className="App">
      <input
        type={show ? "text" : "password"}
        placeholder="type password here"
      />
      <button onClick={handleshow}>{show ? "hide" : "show"} </button>
    </div>
  );
}
