import React, { Component, useState, useEffect } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./Auth.css";
import ".././Main/Layout.css";
import Input from "../minor/Input";
import Select from "../minor/Select";
import Button from "../minor/Button";
import "../minor/Input.css";
import ImgUpload from "./ImgUpload";
import axios from "axios";

function Add(props) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [banner, setBanner] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const findCatId = () => {
    var categories = props.categories;
    var id = categories.indexOf(category) + 1;
    setCategoryId(id);
  };

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    console.log(editorState);
  };
  const handleSave = () => {
    const contentState = editorState.getCurrentContent();
    const content = JSON.stringify(convertToRaw(contentState));
    console.log(content);

    const headers = {
      "Content-Type": "application/json",
      Authorization: props.authToken, // add your authorization token here
    };

    const data = {
      article: {
        article_name: title,
        body: content,
        category_id: 1,
        user_id: 1,
        likes: 0,
        image: banner,
      },
    };

    axios
      .post("http://127.0.0.1:3000/article", data, { headers })
      .then((response) => {
        // handle success
        console.log(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
    // send the content to the server using fetch
  };

  // useEffect(() => {
  //   setEditorState(EditorState.createEmpty());
  // }, []);

  return (
    <div className="home">
      <div className="main">
        <span className="small">Add Blog</span>
        <span
          className="main-banner"
          style={{
            backgroundImage: "url(" + { banner } + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "90%",
            height: "33vh",
          }}></span>
        <span className="big">{title}</span>
        <span className="filters">
          <Input
            type="text"
            placeholder="Enter Article Title"
            label="Article Title"
            value={title}
            func={setTitle}></Input>
          <Select
            label="Select a Category"
            categories={props.categories}
            value={category}
            func={setCategory}></Select>
          <div className="input">
            <label>Upload a Banner Image</label>
            <ImgUpload setBanner={setBanner}></ImgUpload>
          </div>
          <Button text="Submit Article" onClick={handleSave}></Button>
        </span>
      </div>
      <div className="article">
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
        />
      </div>
    </div>
  );
}

export default Add;
