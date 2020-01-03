import React, { useEffect, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Modal } from "antd";
import { HelloButton } from "../components/summernote/modules/Hello";

const SampleTemplate = ({ label }) => {
  return `Hello, ${label}`;
};

const SummerNotePage = () => {
  const [dialogShow, setDialogShow] = useState(false);
  const [fruits, setFruits] = useState("apple");

  useEffect(() => {
    const $ = window.$;
    const $summernote = $(".summernote");

    $summernote.summernote({
      height: 500,
      // toolbar: [["mybutton", ["hello"]]],
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
          console.log(renderToStaticMarkup(<SampleTemplate label={fruits} />));
          window
            .$(".summernote")
            .summernote(
              "pasteHTML",
              renderToStaticMarkup(<SampleTemplate label={fruits} />)
            );
          setDialogShow(false);
        }}
        onCancel={() => setDialogShow(false)}
      >
        <div>
          <input
            type="radio"
            value="apple"
            id="apple"
            name="fruits"
            checked={fruits === "apple"}
            onChange={e => setFruits(e.target.value)}
          />
          <label htmlFor="apple">Apple</label>
        </div>
        <div>
          <input
            type="radio"
            value="banana"
            id="banana"
            name="fruits"
            checked={fruits === "banana"}
            onChange={e => setFruits(e.target.value)}
          />
          <label htmlFor="banana">Banana</label>
        </div>
        <div>
          <input
            type="radio"
            value="orange"
            id="orange"
            name="fruits"
            checked={fruits === "orange"}
            onChange={e => setFruits(e.target.value)}
          />
          <label htmlFor="orange">Orange</label>
        </div>
      </Modal>
    </div>
  );
};

export default SummerNotePage;
