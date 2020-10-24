import React, { useState } from "react";
import ReactJson from "react-json-view";
import "./App.css";

function App() {
  const [input, setInput] = useState(JSON.stringify(sample, undefined, 2));
  const [json, setJson] = useState(sample);
  const [error, setError] = useState<string | null>();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
    try {
      const json = JSON.parse(event.target.value);
      setJson(json);
      setInput(JSON.stringify(json, undefined, 2));
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
  Records: [
    {
      cf: {
        config: {
          distributionDomainName: "d111111abcdef8.cloudfront.net",
          distributionId: "EDFDVBD6EXAMPLE",
          eventType: "viewer-response",
          requestId:
            "4TyzHTaYWb1GX1qTfsHhEqV6HUDd_BzoBZnwfnvQc_1oF26ClkoUSEQ==",
        },
        request: {
          clientIp: "203.0.113.178",
          headers: {
            host: [
              {
                key: "Host",
                value: "d111111abcdef8.cloudfront.net",
              },
            ],
            "user-agent": [
              {
                key: "User-Agent",
                value: "curl/7.66.0",
              },
            ],
            accept: [
              {
                key: "accept",
                value: "*/*",
              },
            ],
          },
          method: "GET",
          querystring: "",
          uri: "/",
        },
        response: {
          headers: {
            "access-control-allow-credentials": [
              {
                key: "Access-Control-Allow-Credentials",
                value: "true",
              },
            ],
            "access-control-allow-origin": [
              {
                key: "Access-Control-Allow-Origin",
                value: "*",
              },
            ],
            date: [
              {
                key: "Date",
                value: "Mon, 13 Jan 2020 20:14:56 GMT",
              },
            ],
            "referrer-policy": [
              {
                key: "Referrer-Policy",
                value: "no-referrer-when-downgrade",
              },
            ],
            server: [
              {
                key: "Server",
                value: "ExampleCustomOriginServer",
              },
            ],
            "x-content-type-options": [
              {
                key: "X-Content-Type-Options",
                value: "nosniff",
              },
            ],
            "x-frame-options": [
              {
                key: "X-Frame-Options",
                value: "DENY",
              },
            ],
            "x-xss-protection": [
              {
                key: "X-XSS-Protection",
                value: "1; mode=block",
              },
            ],
            age: [
              {
                key: "Age",
                value: "2402",
              },
            ],
            "content-type": [
              {
                key: "Content-Type",
                value: "text/html; charset=utf-8",
              },
            ],
            "content-length": [
              {
                key: "Content-Length",
                value: "9593",
              },
            ],
          },
          status: "200",
          statusDescription: "OK",
        },
      },
    },
  ],
};

export default App;
