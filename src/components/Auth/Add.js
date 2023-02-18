import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./Auth.css";

function Add() {
  return (
    <div className="article">
      <Editor />
    </div>
  );
}

export default Add;
