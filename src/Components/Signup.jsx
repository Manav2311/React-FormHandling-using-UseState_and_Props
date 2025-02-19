import React, { useState } from "react";

function Signup({ SubmitedData }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    phoneNumber: "",
    photo: "",
    password: "",
  });
  //heandling the changes and managing the form data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //heandaling the form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill all the fields");
      return;
    }
  };

  return (
    <div
      style={{
        padding: "20px",
          minWidth: "500px",
          margin: "auto",
          border: "1px solid black",
          borderRadius: "5px",
      }}
    >
      
        <h1>Signup</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "90%", padding: "10px", margin: "10px" }}
          />
          <br />
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
            type="number"
            name="PhoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            style={{ width: "90%", padding: "10px", margin: "10px" }}
          />
          <br />
          <input
            type="date"
            name="dob"
            value={formData.dob}
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
          <input
            type="file"
            name="photo"
            value={formData.photo}
            onChange={handleChange}
            style={{ width: "90%", padding: "10px", margin: "10px" }}
          />
          <br />
           
          
          <button type="submit">Signup</button>

        </form>
      </div>
  );
}

export default Signup;
