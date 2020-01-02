import React, { useEffect, useState } from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import '../styles/ckeditor-content.css';

const CKEditorPage = () => {

  const [editor, setEditor] = useState(null);
  const [userInputText, setUserInputText] = useState('');

  useEffect(() => {
    if (!editor) {
      ClassicEditor.create(document.getElementById('editor'))
        .then((editor) => {
          console.log('CKEditor initialized')
          setEditor(editor);
        })
    }

    return () => {
      if (editor) {
        editor.destroy();
      }
    }
  }, []);

  useEffect(() => {
    if (editor) {
      editor.model.document.on('change:data', () => {
        console.log('The data has changed!');
      });
    }
  }, [editor])

  return (
    <>
      <div id="editor"/>
      {
        editor && (
          <>
            <input type="text" onChange={e => setUserInputText(e.target.value)} value={userInputText}/>
            <button onClick={e => {
              editor.setData(userInputText)
            }}>setData
            </button>
            <button onClick={e => {

            }}>현재 커서에 setData</button>
          </>
        )
      }
    </>
  );
};

export default CKEditorPage;
