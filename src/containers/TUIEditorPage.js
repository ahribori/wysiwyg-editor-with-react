import React, { useEffect } from "react";
import Editor from "tui-editor";

import "tui-editor/dist/tui-editor.css"; // editor's ui
import "tui-editor/dist/tui-editor-contents.css"; // editor's content
import "codemirror/lib/codemirror.css"; // codemirror
import "highlight.js/styles/github.css"; // code block highlight

const TUIEditorPage = () => {
  useEffect(() => {
    const instance = new Editor({
      el: document.querySelector("#editorSection"),
      height: window.screen.availHeight - 200
    });

    console.log(instance);
  }, []);

  return (
    <>
      <div id="editorSection" />
    </>
  );
};

export default TUIEditorPage;
