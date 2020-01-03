import React, { useState } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../styles/ckeditor-content.css";
import Toolbar from "../components/ckeditor5/Toolbar";

const CKEditorPage = () => {
  const [ready, setReady] = useState(false);
  const [editor, setEditor] = useState(null);

  return (
    <>
      <h2>Using CKEditor 5 build in React</h2>
      {ready && <Toolbar editor={editor} />}
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        onInit={editor => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
          setEditor(editor);
          setReady(true);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
      />
    </>
  );
};

export default CKEditorPage;
