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
      {/* <Signup />
      <Signin /> */}
      <UserController/>
    </>
  );
}

export default App;
