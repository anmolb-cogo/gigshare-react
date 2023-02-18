import { Link } from "react-router-dom";
import Button from "../minor/Button";
import Input from "../minor/Input";
import "../minor/Input.css";

const Login = () => {
  return (
    <div className="login">
      <h1 className="heading">Log in to your account</h1>
      <p className="sub-heading">Welcome back! Please enter your details.</p>
      <Input
        type="email"
        placeholder="Enter your email"
        label="E-Mail ID"></Input>
      <Input
        type="password"
        placeholder="Enter your password"
        label="Password"></Input>
      <div className="input">
        <div className="forgot">Forgot Password</div>
      </div>
      <Button text="Log In"></Button>
      <div className="input">
        <div className="forgot sign">
          Don't have an account? <Link to="/signup"> Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
