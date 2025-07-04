import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../redux/authSlice";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  console.log("FORM DATA SENDING:", form); 
  dispatch(signupUser(form));
};

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />

      <input
        name="password"
        placeholder="Password"
        type="password"
        onChange={handleChange}
      />
      <select name="role" onChange={handleChange}>
        <option value="user">User</option>
        <option value="doctor">Doctor</option>
      </select>
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
