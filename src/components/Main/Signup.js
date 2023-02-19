import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../minor/Button";
import Input from "../minor/Input";
import "../minor/Input.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setPConfirmPass] = useState("");
  const [bio, setBio] = useState("");
  const [pic, setPic] = useState("");

  const setLogin = () => {
    console.log(name + email + password + bio + pic)
  }

  return (
    <div className="login">
      <h1 className="heading">Create an Account</h1>
      <p className="sub-heading">Join a living network of curious minds.</p>
      <Input
        type="text"
        placeholder="Enter your name"
        label="Your Name"
        value={name}></Input>
      <Input
        type="email"
        placeholder="Enter your email"
        label="E-Mail ID"
        value={email}></Input>
      <Input
        type="password"
        placeholder="Enter your password"
        label="Password"
        value={password}></Input>
      <Input
        type="password"
        placeholder="Confirm password"
        label="Confirm Password"
        value={confirmPass}></Input>
      <Input type="text" placeholder="Enter your bio" label="Bio"></Input>

      <Button text="Log In" onClick={setLogin}></Button>
      <div className="input">
        <div className="forgot sign">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
