import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../minor/Button";
import Input from "../minor/Input";
import "../minor/Input.css";

const Signup = (props) => {
  var baseURL = props.baseURL;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [passMatch, setPassMatch] = useState(false);
  const [bio, setBio] = useState("");
  const [pic, setPic] = useState(
    "https://www.w3schools.com/bootstrap/img_avatar2.png"
  );

  function handleMatch() {
    if (password == confirmPass) {
      setPassMatch("");
    } else {
      setPassMatch("Passwords do not match!");
    }
  }

  const setLogin = () => {
    // console.log(name);
    // console.log(email);
    // console.log(password);
    // console.log(confirmPass);
    const data = {
      user: {
        email: email,
        password: password,
        password_confirmation: confirmPass,
        name: name,
        description: bio,
        image_url: "https://www.w3schools.com/bootstrap/img_avatar2.png",
      },
    };
    axios
      .post(baseURL + "signup", data)
      .then((response) => {
        console.log(response);
        window.alert("Signed Up Successfully!");
        window.location.href = "/login";
      })
      .catch((error) => alert(error));
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
        func={setName}
      ></Input>
      <Input
        type="email"
        placeholder="Enter your email"
        label="E-Mail ID"
        value={email}
        func={setEmail}
      ></Input>
      <Input
        type="password"
        placeholder="Enter your password"
        label="Password"
        value={password}
        func={setPassword}
      ></Input>
      {/* <Input
        type="password"
        placeholder="Confirm password"
        label="Confirm Password"
        value={confirmPass}
        func={{setConfirmPass, handleMatch}}
      ></Input> */}
      <div className="input">
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPass}
          onChange={(e) => {
            setConfirmPass(e.target.value);
          }}
          onBlur={handleMatch}
        />
        {passMatch}
      </div>
      <Input
        type="text"
        placeholder="Enter your bio"
        label="Bio"
        value={bio}
        func={setBio}
      ></Input>

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
