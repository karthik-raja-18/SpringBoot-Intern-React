import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/auth/register", {
        userName,
        password
      });
      console.log("Registration Success", response.data);
      alert("Registration Successful");
    } catch (e) {
      console.log("Registration Error", e);
      alert("Registration Failed");
    }
    console.log("Form Submitted");
  }

  return (
    <div>
      <h2>Register</h2>
      <div>
        <form onSubmit={handleRegister}>
          <label htmlFor="userName">User Name</label>
          <input
            id="userName"
            name="userName"
            value={userName}
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
          <br /><br />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
