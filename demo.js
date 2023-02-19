import React, { Component, useEffect } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

function UncontrolledEditor(props) {
  const [editorState, setEditorState] = useState();

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  useEffect((editorState) => {
    setEditorState(EditorState.createEmpty());
  }, []);

  return (
    <Editor
      initialEditorState={editorState}
      onEditorStateChange={onEditorStateChange}
    />
  );
}
