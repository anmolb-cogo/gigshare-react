import React, { Component, useState, useEffect } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../Auth/Auth.css";
import ".././Main/Layout.css";
import Input from "../minor/Input";
import Select from "../minor/Select";
import Button from "../minor/Button";
import "../minor/Input.css";
import "../Main/View.css";

import { LikeButton } from "@lyket/react";
import { Provider } from "@lyket/react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Edit(props) {
  var baseURL = props.baseURL;
  const location = useLocation();
  console.log(location.state.id);

  const findCatId = (category) => {
    var categories = props.categories;
    var id = categories.indexOf(category) + 1;
    return id;
  };

  const findCatById = (id) => {
    var categories = props.categories;
    var category = categories[id - 1];
    return category;
  };

  const [check, setCheck] = useState(0);
  var authToken = localStorage.getItem("token");
  const [title, setTitle] = useState(location.state.article_name);
  const [category, setCategory] = useState(
    findCatId(location.state.category_id)
  );
  const [banner, setBanner] = useState(location.state.image);

  const [editorState, setEditorState] = useState("");

  const convertDate = (date) => {
    var parts = date.slice(0, 10).split("-");
    var mydate = new Date(parts[0], parts[1] - 1, parts[2]);
    return mydate.toDateString();
  };

  const fillEditor = () => {
    const jsonContent = location.state.body;
    console.log(jsonContent);
    const content = JSON.parse(jsonContent);
    //console.log(content);
    const contentState = convertFromRaw(content);
    //console.log(contentState);
    //const contentState = jsonContent;
    setEditorState(EditorState.createWithContent(contentState));
  };

  useEffect(() => {
    fillEditor();
  }, []);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    console.log(editorState);
  };

  const handleUpdate = () => {
    if (authToken) {
      const contentState = editorState.getCurrentContent();
      const content = JSON.stringify(convertToRaw(contentState));
      console.log(content);

      const headers = {
        "Content-Type": "application/json",
        Authorization: authToken,
      };

      const data = {
        article: {
          article_name: title,
          body: content,
          category_id: findCatId(category),
          user_id: parseInt(localStorage.getItem("userId")),
          likes: 0,
          image: banner,
        },
      };

      console.log(data);

      axios
        .post(baseURL + "article", data, headers)
        .then((response) => {
          // handle success
          console.log(response.data);
          alert("Your changes will be published shortly.");
        })
        .catch((error) => {
          // handle error
          console.log(error);
          alert(error);
        });
    } else {
      alert("You need to login to Add an Article");
    }
  };

  return (
    <div className="home">
      <div className="main">
        <span className="small">{findCatById(location.state.category_id)}</span>
        <span
          className="main-banner"
          style={{
            backgroundImage: "url(" + location.state.image + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "90%",
            height: "33vh",
          }}
        ></span>
        <span className="big">{location.state.article_name}</span>
        <span className="profile">
          <span
            className="avatar"
            style={{
              backgroundImage:
                "url(" +
                "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
                ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            AB
          </span>
          <span className="avatar-details">
            <p className="name">{localStorage.getItem("name")}</p>
            <p className="date">{convertDate(location.state.created_at)}</p>
          </span>
        </span>
      </div>
      <span className="filters">
        <Button text="Edit Article" onClick={handleUpdate}></Button>
      </span>

      <div className="article">
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
        />
      </div>
    </div>
  );
}

export default Edit;
