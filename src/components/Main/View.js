import React, { Component, useState, useEffect } from "react";
import { EditorState, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../Auth/Auth.css";
import ".././Main/Layout.css";
import Input from "../minor/Input";
import Select from "../minor/Select";
import Button from "../minor/Button";
import "../minor/Input.css";
import "./View.css";

import { LikeButton } from "@lyket/react";
import { Provider } from "@lyket/react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function View(props) {
  var baseURL = props.baseURL;
  const location = useLocation();
  console.log(location.state.id);
  const [categoryId, setCategoryId] = useState("");
  const [banner, setBanner] = useState("");
  const [totalLikes, setTotalLikes] = useState(location.state.likes);
  const [check, setCheck] = useState(0);
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  //api call
  const getCommentList = async function () {
    const url = baseURL + "comments/" + location.state.id;
    //console.log(url);
    const list = await axios.get(url);
    console.log(list.data);
    setCommentList(list.data);
  };

  // //make API call
  useEffect(function () {
    getCommentList();
  }, []);

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
    axios
      .patch(baseURL + "updatelikes/" + location.state.id, {
        article: {
          likes: count,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  console.log(location.state.username);
  const postComment = () => {
    var username = "Anonymous";
    if (location.state.username) {
      username = localStorage.getItem("name");
    }
    const data = {
      comment: {
        body: comment,
        user_name: username,
      },
    };
    axios
      .post(baseURL + "comment/" + location.state.id, data)
      .then((response) => {
        console.log(response);
        window.alert("Comment posted, refresh to see!");
        //setCommentList(commentList.push(comment));
      })
      .catch((error) => alert(error));
  };

  const findCatById = (id) => {
    var categories = props.categories;
    var category = categories[id - 1];
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

  const jsonContent = location.state.body;
  console.log(jsonContent);
  const content = JSON.parse(jsonContent);
  console.log(content);
  const contentState = convertFromRaw(content);
  console.log(contentState);

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(contentState)
  );

  const onEditorStateChange = () => {
    setEditorState(editorState);
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
            Hello
          </span>
          <span className="avatar-details">
            <p className="name">{location.state.username}</p>
            <p className="date">{convertDate(location.state.created_at)}</p>
          </span>
        </span>
      </div>
      <div className="article-view">
        <Editor
          toolbarHidden
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          readOnly={true} // set to true to make the editor content read-only
        />
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
              onChange={(e) => {
                setComment(e.target.value);
              }}
              value={comment}
            ></input>
            <button className="full-btn" onClick={postComment}>
              Post Comment
            </button>
          </div>
          <h4>Previous Comments:</h4>
          {commentList.map((comment) => {
            return (
              <span className="comment">
                <span className="comment-name">{comment.user_name}</span>
                commented
                <span className="comment-body">{comment.body}</span>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default View;
