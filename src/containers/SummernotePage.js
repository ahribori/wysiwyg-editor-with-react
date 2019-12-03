import React, { useEffect, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Modal, Button } from "antd";
import { HelloButton } from "../components/summernote/modules/Hello";

const SampleTemplate = () => {
  return "hello";
};

const SummerNotePage = () => {
  const [dialogShow, setDialogShow] = useState(false);

  useEffect(() => {
    const $ = window.$;
    const $summernote = $(".summernote");

    $summernote.summernote({
      height: 500,
      toolbar: [["mybutton", ["hello"]]],
      buttons: {
        hello: HelloButton($summernote, $)
      }
    });

    return () => {
      $summernote.summernote("destroy");
    };
  }, []);
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setDialogShow(true);
          }}
        >
          hello
        </button>
      </div>
      <div className="summernote" />
      <Modal
        visible={dialogShow}
        onOk={() => {
          window
            .$(".summernote")
            .summernote("pasteHTML", renderToStaticMarkup(<SampleTemplate />));
          setDialogShow(false);
        }}
        onCancel={() => setDialogShow(false)}
      />
    </div>
  );
};

export default SummerNotePage;
