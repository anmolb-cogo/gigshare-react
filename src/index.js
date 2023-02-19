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

function App() {
  var categories = ["Technology", "Travel", "Food"];
  var baseURL = "http://127.0.0.1:3000/";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Home categories={categories} baseURL={baseURL} />}
          />
          <Route
            path="blogs"
            element={<Blogs categories={categories} baseURL={baseURL} />}
          />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login baseURL={baseURL} />} />
          <Route path="signup" element={<Signup baseURL={baseURL} />} />
          {/* <Route path="profile" element={<Profile baseURL={baseURL} />} /> */}
          <Route
            path="add"
            element={<Add categories={categories} baseURL={baseURL} />}
          />
          <Route
            path="edit"
            element={<Edit categories={categories} baseURL={baseURL} />}
          />
          <Route
            path="your"
            element={<Your categories={categories} baseURL={baseURL} />}
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
