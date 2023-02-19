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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home categories={categories} />} />
          <Route path="blogs" element={<Blogs categories={categories} />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="profile" element={<Profile />} />
          <Route path="add" element={<Add categories={categories} />} />
          <Route path="edit" element={<Edit categories={categories} />} />
          <Route path="your" element={<Your categories={categories} />} />
          <Route path="view" element={<View categories={categories} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
