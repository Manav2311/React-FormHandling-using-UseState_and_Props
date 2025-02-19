import React, { useState } from "react";

function Signin({ SubmitedData, crediantials }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  //heandling the changes and managing the form data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //heandaling the form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.email === crediantials.email &&
      formData.password === crediantials.password
    ) {
      alert("Login Successfull");
      return;
    }
    else{
        alert("Login ");
    }
  };

  return (
    <>
      <div
        style={{
          padding: "20px",
          minWidth: "500px",
          margin: "auto",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <h1>Signin</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "90%", padding: "10px", margin: "10px" }}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: "90%", padding: "10px", margin: "10px" }}
          />
          <br />
          <button onSubmit={SubmitedData} >
            Signin
          </button>
        </form>
      </div>
    </>
  );
}

export default Signin;
