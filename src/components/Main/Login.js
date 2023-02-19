import { Link } from "react-router-dom";
import Button from "../minor/Button";
import Input from "../minor/Input";
import "../minor/Input.css";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    console.log(email);
    const temp = {
      user: {
        email: email,
        password: password,
      },
    };
    axios
      .post("http://127.0.0.1:3000/login", temp)
      .then((response) => console.log(response));
  };
  return (
    <div className="login">
      <h1 className="heading">Log in to your account</h1>
      <p className="sub-heading">Welcome back! Please enter your details.</p>
      <Input
        type="email"
        placeholder="Enter your email"
        label="E-Mail ID"
        value={email}
        func={setEmail}></Input>
      <Input
        type="password"
        placeholder="Enter your password"
        label="Password"
        value={password}
        func={setPassword}></Input>
      <div className="input">
        <div className="forgot">Forgot Password</div>
      </div>
      <Button text="Log In" onClick={login}></Button>
      <div className="input">
        <div className="forgot sign">
          Don't have an account? <Link to="/signup"> Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
