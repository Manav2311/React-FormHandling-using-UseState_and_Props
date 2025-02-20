import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import UserController from "./Components/UserController";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          textAlign: "center",
          border: "3px solid white",
          boxShadow: "-1px 0px 18px 13px rgba(0, 0, 0, 0.5)",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        {/* <Signup />
      <Signin /> */}
        <UserController />
      </div>
    </>
  );
}

export default App;
