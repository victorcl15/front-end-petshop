import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Portal from "./components/portal-web";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Portal></Portal>
    </>
  );
}

export default App;
