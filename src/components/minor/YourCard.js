import axios from "axios";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Card.css";
import { EditorState, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";


const Card = (props) => {
  var categories = props.categories;
  var baseURL = props.baseURL;
  var authToken = localStorage.getItem("token");
  console.log(props.id);
  const delArticle = (key) => {
    console.log("Deleting Article");
    //var url = baseURL + "article/" + key;
    var url = baseURL + "deletearticle/" + key;
    axios
      .delete(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: authToken
        },
      })
      .then((response) => {
        console.log("article deleted");
        alert("Article Deleted!");
        window.location.href = "/your";
      })
      .catch((error) => alert(error));
  };

  const convertDate = (date) => {
    var parts = date.slice(0, 10).split("-");
    var mydate = new Date(parts[0], parts[1] - 1, parts[2]);
    return mydate.toDateString();
  };
  const findCategory = (index) => {
    var category = categories[index - 1];
    return category;
  };
  const jsonContent = props.body;
  console.log(jsonContent);
  const content = JSON.parse(jsonContent);
  //console.log(content);
  const contentState = convertFromRaw(content);
  //console.log(contentState);

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(contentState)
  );

  const onEditorStateChange = () => {
    setEditorState(editorState);
  };
  return (
    <div className="card">
      <div className="poster">
        <img src={props.poster}></img>
      </div>
      <div className="details">
        {/* Category */}
        <span className="category">{findCategory(props.categoryId)}</span>
        <span className="title">
          <span>{props.title}</span>
        </span>
        <span className="desc">
          <Editor
            toolbarHidden
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            readOnly={true} // set to true to make the editor content read-only
          />
        </span>
        <span className="button-details">
          {convertDate(props.date)}
          <Link to="/edit" state={props.article}>
            <button className="fill-btn">Edit</button>
          </Link>

          <button className="fill-btn" onClick={() => delArticle(props.id)}>
            Delete
          </button>
        </span>
      </div>
    </div>
  );
};

export default Card;
