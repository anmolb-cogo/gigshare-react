import axios from "axios";
import { Outlet, Link } from "react-router-dom";
import Button from "../minor/Button";
import "./Layout.css";

const Layout = (props) => {
  var baseURL = props.baseURL;
  const logout = () => {
    console.log("Logging out");
    const result = axios.delete(baseURL + "logout", {
      headers: {
        Authorization: props.authToken,
      },
    });
    if (result.length == 0) {
      alert(result.data);
    } else {
      props.setAuthToken("");
      props.setAuthenticated(false);
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("email");
      localStorage.removeItem("image");
      localStorage.removeItem("name");
      localStorage.removeItem("bio");
      console.log(props.authToken);
      console.log(props.authenticated);
      alert("Logged Out!");
    }
  };
  return (
    <>
      <nav>
        <ul>
          <span className="left">
            <span className="logo">
              <img src="https://i.ibb.co/rb7CkkQ/favicon.png" alt="logo"></img>
              GigShare
            </span>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
          </span>
          {props.authenticated && (
            <span className="middle">
              <li>
                <Link to="/your">Your Blogs</Link>
              </li>

              <li>
                <Link to="/add">Add Blog</Link>
              </li>
            </span>
          )}
          {!props.authenticated && (
            <span className="right">
              <li>
                <Link to="/login">Log in</Link>
              </li>

              <li>
                <Link to="/signup" className="nav-btn">
                  Sign up
                </Link>
              </li>
            </span>
          )}
          {props.authenticated && (
            <span className="right">
              <li>
                <Link to="/profile">Your Profile</Link>
              </li>

              <li>
                <button className="nav-btn" onClick={logout}>
                  Log out
                </button>
              </li>
            </span>
          )}
        </ul>
      </nav>

      <Outlet />

      <footer>
        <hr></hr>
        <span className="foot">
          <span className="logo">
            <img src="https://i.ibb.co/rb7CkkQ/favicon.png" alt="logo"></img>
            GigShare
          </span>
          <span>&#169; 2023 Cogoport. All rights reserved.</span>
        </span>
      </footer>
    </>
  );
};

export default Layout;
