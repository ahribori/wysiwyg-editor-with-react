import React, { useState } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Image from "@ckeditor/ckeditor5-image/src/image";
import InsertImage from "../components/ckeditor5/plugin/InsertImage";

import "../styles/ckeditor-content.css";
import Toolbar from "../components/ckeditor5/Toolbar";

const config = {
  plugins: [Essentials, Bold, Italic, Paragraph, Image, InsertImage],
  toolbar: ["bold", "italic", "insertImage"]
};

const CKEditorPage = () => {
  const [ready, setReady] = useState(false);
  const [editor, setEditor] = useState(null);

  return (
    <>
      <h2>Using CKEditor 5 build in React</h2>
      {ready && <Toolbar editor={editor} />}
      <CKEditor
        editor={ClassicEditor}
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
        config={config}
      />
    </>
  );
};

export default CKEditorPage;
