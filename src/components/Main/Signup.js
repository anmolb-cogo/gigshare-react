import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../minor/Button";
import Input from "../minor/Input";
import "../minor/Input.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [bio, setBio] = useState("");
  const [pic, setPic] = useState(
    "https://www.w3schools.com/bootstrap/img_avatar2.png"
  );

  const setLogin = () => {
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(confirmPass);
    const temp = {
      user: {
        email: email,
        password: password,
        password_confirmation: password,
        name: name,
        description: bio,
        image_url: "https://www.w3schools.com/bootstrap/img_avatar2.png",
      },
    };
    axios
      .post("http://127.0.0.1:3000/signup", temp)
      .then((response) => console.log(response));
  };

  return (
    <div className="login">
      <h1 className="heading">Create an Account</h1>
      <p className="sub-heading">Join a living network of curious minds.</p>
      <Input
        type="text"
        placeholder="Enter your name"
        label="Your Name"
        value={name}
        func={setName}></Input>
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
      <Input
        type="password"
        placeholder="Confirm password"
        label="Confirm Password"
        value={confirmPass}
        func={setConfirmPass}></Input>
      <Input
        type="text"
        placeholder="Enter your bio"
        label="Bio"
        value={bio}
        func={setBio}></Input>

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
