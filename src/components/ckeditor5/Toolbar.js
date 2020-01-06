import React from "react";

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
        <button onClick={() => {
          console.log(editor.model)
        }}>getData</button>
      </div>
    )
  );
};

export default Toolbar;
