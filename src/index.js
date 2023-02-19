import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./components/Main/Layout";
import Home from "./components/Main/Home";
import Blogs from "./components/Main/Blogs";
import Pricing from "./components/Main/Pricing";
import Login from "./components/Main/Login";
import Signup from "./components/Main/Signup";
import Profile from "./components/Auth/Profile";
import Add from "./components/Auth/Add";
import Edit from "./components/Auth/Edit";
import Your from "./components/Auth/Your";
import NoPage from "./components/Main/NoPage";
import View from "./components/Main/View";
import axios from "axios";

function App(props) {
  var categories = ["Technology", "Travel", "Food"];
  const [authors, setAuthors] = useState(["List of Authors"]);
  const [userDetails, setUserDetails] = useState({
    id: localStorage.getItem("userId"),
    email: localStorage.getItem("email"),
    name: localStorage.getItem("name"),
    description: localStorage.getItem("bio"),
    image_url: localStorage.getItem("image"),
  });
  //api call
  const getAuthors = async function () {
    const url = baseURL + "getauthours";
    //console.log(url);
    const list = await axios.get(url);
    // console.log(list.data);
    // console.log(list.data.name);
    var aut = list.data.map((name) => name.name);
    // console.log(aut);
    const temp = Object.values(aut);
    // console.log(temp);
    setAuthors(temp);
  };

  const [authenticated, setAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(localStorage.getItem("token"));
  const [userId, setUserId] = useState("");
  const token = localStorage.getItem("token");

  const checkJWT = () => {
    if (!token) {
      console.log("Token not found");
      console.log(token);
      setAuthenticated(false);
    } else if (token) {
      console.log("Token Found");
      console.log(token);
      const tokenid = localStorage.getItem("token");
      setAuthToken(tokenid);
      const userId = localStorage.getItem("userId");
      setUserId(userId);
      console.log(userId);
      console.log(authToken);
      setAuthenticated(true);
    }
  };

  useEffect(() => {
    checkJWT();
    getAuthors();
  }, []);

  var baseURL = "http://127.0.0.1:3000/";

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
              authToken={authToken}
              setAuthToken={setAuthToken}
            />
          }
        >
          <Route
            index
            element={<Home categories={categories} baseURL={baseURL} />}
          />
          <Route
            path="blogs"
            element={
              <Blogs
                categories={categories}
                baseURL={baseURL}
                authors={authors}
              />
            }
          />
          <Route path="pricing" element={<Pricing />} />
          <Route
            path="login"
            element={
              <Login
                baseURL={baseURL}
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
                authToken={authToken}
                setAuthToken={setAuthToken}
              />
            }
          />
          <Route path="signup" element={<Signup baseURL={baseURL} />} />
          {/* <Route path="profile" element={<Profile baseURL={baseURL} />} /> */}
          <Route
            path="add"
            element={
              <Add
                categories={categories}
                baseURL={baseURL}
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
                authToken={authToken}
              />
            }
          />
          <Route
            path="edit"
            element={
              <Edit
                categories={categories}
                baseURL={baseURL}
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
            }
          />
          <Route
            path="your"
            element={
              <Your
                categories={categories}
                baseURL={baseURL}
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
            }
          />
          <Route
            path="view"
            element={<View categories={categories} baseURL={baseURL} />}
          />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
