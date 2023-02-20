import { Link } from "react-router-dom";
import Button from "../minor/Button";
import Input from "../minor/Input";
import "../minor/Input.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Login = (props) => {
  var baseURL = props.baseURL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [csrfToken, setCsrfToken] = useState("");

  // make a request to get the CSRF token
  // useEffect(() => {
  //   const fetchCsrfToken = async () => {
  //     const response = await fetch(baseURL+"get_csrf_token");
  //     const data = await response.json();
  //     setCsrfToken(data.csrf_token);
  //   };
  //   fetchCsrfToken();
  // }, []);

  const login = () => {
    // const headers = {
    //   "Content-Type": "application/json",
    //   "X-CSRF-Token": csrfToken,
    // };
    // console.log(headers);
    axios
      .post(
        baseURL + "login",
        {
          user: {
            email: email,
            password: password,
          },
        }
      )
      .then((response) => {
        console.log(response);
        console.log(response.data.user.id);
        const authToken = response.headers.authorization;
        console.log(authToken);
        props.setAuthenticated(true);
        props.setAuthToken(authToken);
        localStorage.setItem("token", authToken);
        console.log(authToken);
        localStorage.setItem("userId", response.data.user.id);
        localStorage.setItem("email", response.data.user.email);
        localStorage.setItem("name", response.data.user.name);
        localStorage.setItem("bio", response.data.user.description);
        localStorage.setItem("image", response.data.user.image_url);
        console.log(response);
        window.location.href = "/";
      })
      .catch((error) => alert(error));
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
        func={setEmail}
      ></Input>
      <Input
        type="password"
        placeholder="Enter your password"
        label="Password"
        value={password}
        func={setPassword}
      ></Input>
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
