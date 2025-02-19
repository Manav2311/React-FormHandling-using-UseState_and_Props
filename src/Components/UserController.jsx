import React, { useState } from "react";
import Signup from "./Signup";
import Signin from "./Signin";

function UserController() {
  const [islogedIn, setislogedIn] = useState(false);
  const [crediantials, setCrediantials] = useState(null);
  const [userData, setUserData] = useState(null);

  const heandleSubmit = (data) => {
    if (islogedIn) {
      setUserData(data);
    } else {
      setCrediantials({ email: data.email, password: data.password });
      setislogedIn(true);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        {userData ? (
          <div>
            <h1>Welcome{userData.name}</h1>
          </div>
        ) : islogedIn ? (
          <Signin SubmitedData={heandleSubmit} />
        ) : (
          <Signup
            SubmitedData={heandleSubmit}
            crediantials={crediantials || { email: "", password: "" }}
          />
        )}

        {!userData && (
          <button
            style={{
              marginTop: "20px",
            }}
            onClick={() => setislogedIn(!islogedIn)}
          >
            Switch to {islogedIn ? "Signup" : "SignIn"}
          </button>
        )}
      </div>
    </>
  );
}

export default UserController;
