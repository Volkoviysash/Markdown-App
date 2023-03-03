import { useState } from "react";
import "./App.css";
import { marked } from "marked";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

function App() {
  const defaultValue = `
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:

  Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
  const [textEditor, setTextEditor] = useState(defaultValue);

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
          defaultValue={defaultValue}
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
