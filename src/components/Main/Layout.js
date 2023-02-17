import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
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
          <span className="middle">
            <li>
              <Link to="/your">Your Blogs</Link>
            </li>

            <li>
              <Link to="/add">Add Blog</Link>
            </li>
          </span>
          <span className="right">
            <li>
              <Link to="/login">Log in</Link>
            </li>

            <li>
              <Link to="/signup" className="nav-btn">Sign up</Link>
            </li>
          </span>
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
