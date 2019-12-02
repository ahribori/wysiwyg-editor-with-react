import React, { useEffect } from "react";

const SummerNotePage = () => {
  useEffect(() => {
    const $ = window.$;

    $('.summernote').summernote({
      height: 500,
    });

  }, []);
  return <div className="summernote" />;
};

export default SummerNotePage;
