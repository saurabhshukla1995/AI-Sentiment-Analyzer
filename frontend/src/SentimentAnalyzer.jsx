import { useState } from "react";
import axios from "axios";

export default function SentimentAnalyzer() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const analyze = async () => {
    try {
      const res = await axios.post("http://localhost:8000/predict", { text });
      setResult(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>AI Sentiment Analyzer</h1>
      <textarea
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100%", padding: "0.5rem" }}
      />
      <button
        onClick={analyze}
        style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
      >
        Analyze Sentiment
      </button>
      {result && (
        <p style={{ marginTop: "1rem" }}>
          Sentiment: <b>{result.label}</b> (Confidence: {result.score.toFixed(2)})
        </p>
      )}
    </div>
  );
}