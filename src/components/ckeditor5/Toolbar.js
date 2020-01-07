import React from "react";
import HtmlDataProcessor from "@ckeditor/ckeditor5-engine/src/dataprocessor/htmldataprocessor";

const Toolbar = ({ editor }) => {
  return (
    editor && (
      <div
        style={{
          borderWidth: "1px 1px 0 1px",
          borderColor: "#C4C4C4",
          borderStyle: "solid",
          backgroundColor: "#FAFAFA",
          padding: 10
        }}
      >
        <button
          onClick={() => {
            console.log(editor.getData());
          }}
        >
          getData
        </button>

        <button
          onClick={() => {
            const docFrag = editor.model.change(writer => {
              const p1 = writer.createElement("paragraph");
              const p2 = writer.createElement("paragraph");
              const blockQuote = writer.createElement("blockQuote");
              const docFrag = writer.createDocumentFragment();

              writer.append(p1, docFrag);
              writer.append(blockQuote, docFrag);
              writer.append(p2, blockQuote);
              writer.insertText("foo", p1);
              writer.insertText("bar", p2);

              return docFrag;
            });
            editor.model.insertContent(docFrag);
          }}
        >
          docFrag insertContent
        </button>

        <button
          onClick={() => {
            const htmlDP = new HtmlDataProcessor();
            const viewFragment = htmlDP.toView("<p>hello</p>");
            const modelFragment = editor.data.toModel(viewFragment);
            editor.model.insertContent(modelFragment);
          }}
        >
          htmlString insertContent
        </button>
      </div>
    )
  );
};

export default Toolbar;
