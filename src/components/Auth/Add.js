import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./Auth.css";
import ".././Main/Layout.css";
import Input from "../minor/Input";
import Select from "../minor/Select";

function Add() {
  return (
    <div className="home">
      <div className="main">
        <span className="small">Add Blog</span>
        <span className="big">Some Title</span>
        <span className="filters">
          <Input
            type="text"
            placeholder="Enter Article Title"
            label="Article Title"></Input>
          <Select label="Category"></Select>
        </span>
      </div>
      <div className="article">
        <Editor />
      </div>
    </div>
  );
}

export default Add;
