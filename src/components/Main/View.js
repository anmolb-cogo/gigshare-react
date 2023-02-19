import React, { Component, useState, useEffect } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../Auth/Auth.css";
import ".././Main/Layout.css";
import Input from "../minor/Input";
import Select from "../minor/Select";
import Button from "../minor/Button";
import "../minor/Input.css";
import "./View.css";

import { convertFromRaw } from "draft-js";
import { LikeButton } from "@lyket/react";
import { Provider } from "@lyket/react";

function View(props) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [banner, setBanner] = useState("");
  const [editorState, setEditorState] = useState();
  const [totalLikes, setTotalLikes] = useState(4);
  const [check, setCheck] = useState(0);

  const handleLike = () => {
    var count = totalLikes;
    if (check == 0) {
      count = count + 1;
      setTotalLikes(count);
      setCheck(1);
    } else if (check == 1) {
      count = count - 1;
      setCheck(0);
      setTotalLikes(count);
    }
  };
  const findCatId = () => {
    var categories = props.categories;
    var id = categories.indexOf(category) + 1;
    setCategoryId(id);
  };
  const convertDate = (date) => {
    var parts = date.slice(0, 10).split("-");
    var mydate = new Date(parts[0], parts[1] - 1, parts[2]);
    return mydate.toDateString();
  };

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    console.log(editorState);
  };

  useEffect(() => {
    setEditorState(EditorState.createEmpty());
  }, []);

  //some test
  const content = {
    entityMap: {},
    blocks: [
      {
        key: "637gr",
        text: "Initialized from content state.",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
  };
  //some test

  return (
    <div className="home">
      <div className="main">
        <span className="small">Category name</span>
        <span
          className="main-banner"
          style={{
            backgroundImage:
              "url(" +
              "https://upcdn.io/FW25b53/thumbnail/uploads/2023/02/18/Image-7Ptx.png" +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "90%",
            height: "33vh",
          }}></span>
        <span className="big">Some Very Big Title of the Blog</span>
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
            }}>
            Hello
          </span>
          <span className="avatar-details">
            <p className="name">Some Author</p>
            <p className="date">Some Date</p>
          </span>
        </span>
      </div>
      <div className="article">
        <Editor
          initialEditorState={editorState}
          onEditorStateChange={onEditorStateChange}
        />
      </div>

      <div className="interaction">
        <div className="like">
          <button onClick={handleLike}>❤️ {totalLikes}</button>
        </div>
        <div className="comments">
          <div className="new-comment">
            <input type="text" placeholder="Add Comment"></input>
            <button className="full-btn">Post Comment</button>
          </div>
          <h4>Previous Comments:</h4>
          <span className="comment">
            <span className="comment-name">Anonymous</span>
            commented
            <span className="comment-body">Some Comment Body</span>
          </span>
          <span className="comment">
            <span className="comment-name">Anonymous</span>
            commented
            <span className="comment-body">Some Comment Body</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default View;
