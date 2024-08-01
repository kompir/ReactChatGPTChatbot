import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const API_URL = "https://api-inference.huggingface.co/models/gpt2";
const API_KEY = "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";

function App2() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post(
        API_URL,
        { inputs: question },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );
      setResponse(result.data[0].generated_text);
    } catch (error) {
      console.error("Error fetching the API", error);
      setResponse("Error fetching the API");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ask GPT-2</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{response}</p>
      </header>
    </div>
  );
}

export default App2;
