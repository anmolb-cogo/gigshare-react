import { Link } from "react-router-dom";
import Button from "../minor/Button";
import Input from "../minor/Input";
import "../minor/Input.css";

const Signup = () => {
  return (
    <div className="login">
      <h1 className="heading">Create an Account</h1>
      <p className="sub-heading">Join a living network of curious minds.</p>
      <Input
        type="text"
        placeholder="Enter your name"
        label="Your Name"></Input>
      <Input
        type="email"
        placeholder="Enter your email"
        label="E-Mail ID"></Input>
      <Input
        type="password"
        placeholder="Enter your password"
        label="Password"></Input>
      <Input
        type="password"
        placeholder="Confirm password"
        label="Confirm Password"></Input>
      <Input type="text" placeholder="Enter your bio" label="Bio"></Input>

      <Button text="Log In"></Button>
      <div className="input">
        <div className="forgot sign">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
