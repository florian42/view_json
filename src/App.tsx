import React, { useState } from "react";
import ReactJson from "react-json-view";
import "./App.css";

function App() {
  const [input, setInput] = useState(JSON.stringify(sample));
  const [json, setJson] = useState(sample);
  const [error, setError] = useState<string | null>();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
    try {
      const json = JSON.parse(event.target.value);
      setJson(json);
      setInput(JSON.stringify(json, undefined, 4));
      setError(null);
    } catch (error: unknown) {
      if (error instanceof SyntaxError) {
        setError(error.message);
      } else if (typeof error === "string") {
        setError(error);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className="App">
      <label className="inputContainer">
        Paste your JSON here:
        {error && <label className="error">{`Syntax error: ${error}`}</label>}
        <textarea value={input} onChange={handleChange} className="input" />
      </label>
      <label className="jsonViewer">
        Inspect it:
        <ReactJson src={json} />
      </label>
    </div>
  );
}

const sample = {
  glossary: {
    title: "example glossary",
    GlossDiv: {
      title: "S",
      GlossList: {
        GlossEntry: {
          ID: "SGML",
          SortAs: "SGML",
          GlossTerm: "Standard Generalized Markup Language",
          Acronym: "SGML",
          Abbrev: "ISO 8879:1986",
          GlossDef: {
            para:
              "A meta-markup language, used to create markup languages such as DocBook.",
            GlossSeeAlso: ["GML", "XML"],
          },
          GlossSee: "markup",
        },
      },
    },
  },
};

export default App;
