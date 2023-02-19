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
import axios from "axios";
import { useLocation } from "react-router-dom";

function View(props) {
  const [categoryId, setCategoryId] = useState("");
  const [banner, setBanner] = useState("");
  const [totalLikes, setTotalLikes] = useState(4);
  const [check, setCheck] = useState(0);
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState("");

  const location = useLocation();
  console.log(location.state);

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

  const postComment = () => {
    const temp = {
      comment: {
        body: comment,
        user_name: "Anonymous",
      },
    };
    axios
      .post("http://127.0.0.1:3000/comment", temp)
      .then((response) => console.log(response));
  };
  const findCatById = (id) => {
    var categories = props.categories;
    var category = categories[id-1];
    return category;
  };
  const convertDate = (date) => {
    var parts = date.slice(0, 10).split("-");
    var mydate = new Date(parts[0], parts[1] - 1, parts[2]);
    return mydate.toDateString();
  };

  useEffect(() => {
    //setEditorState(EditorState.createEmpty());
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
          }}></span>
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
            }}>
            Hello
          </span>
          <span className="avatar-details">
            <p className="name">{location.state.username}</p>
            <p className="date">{convertDate(location.state.created_at)}</p>
          </span>
        </span>
      </div>
      <div className="article">
        {/* <Editor
          initialEditorState={editorState}
          onEditorStateChange={onEditorStateChange}
        /> */}
        {location.state.body}
      </div>

      <div className="interaction">
        <div className="like">
          <button onClick={handleLike}>❤️ {totalLikes}</button>
        </div>
        <div className="comments">
          <div className="new-comment">
            <input
              type="text"
              placeholder="Add Comment"
              func={setComment}
              value={comment}></input>
            <button className="full-btn" onClick={postComment}>
              Post Comment
            </button>
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
