import { useState } from "react";
import "./App.css";
import { marked } from "marked";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [textEditor, setTextEditor] = useState("");
  const [isEditorFull, setIsEditorFull] = useState(false);

  const handleEditorChange = (event) => {
    setTextEditor(event.target.value);
  };

  return (
    <div className="App">
      <div className="editorBlock">
        <div id="editorHeader" className="editorHeader">
          Editor
          <FontAwesomeIcon icon={faExpand} />
        </div>
        <textarea
          id="editor"
          className="editor"
          onChange={handleEditorChange}
        ></textarea>
      </div>
      <div className="previewBlock">
        <div id="previewHeader" className="previewHeader">
          Previewer
          <FontAwesomeIcon icon={faExpand} />
        </div>
        <div
          id="preview"
          className="preview"
          dangerouslySetInnerHTML={{ __html: marked(textEditor) }}
        ></div>
      </div>
    </div>
  );
}

export default App;
