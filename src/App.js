import React, { useState, useEffect } from "react";
import WordCard from "./components/WordCard/WordCard";

function App() {
  const [words, setWords] = useState([]);
  const [frontInput, setFrontInput] = useState("");
  const [backInput, setBackInput] = useState("");

  useEffect(() => {
    fetch("/words.json")
      .then((res) => res.json())
      .then((data) => setWords(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWord = {
      id: Date.now(),
      front: frontInput,
      back: backInput,
    };
    setWords([newWord, ...words]);
    setFrontInput("");
    setBackInput("");
  };

  return (
    <main>
      <h1>React Dictionary</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "1.5rem" }}>
        <input
          type="text"
          placeholder="English word"
          value={frontInput}
          onChange={(e) => setFrontInput(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="German word"
          value={backInput}
          onChange={(e) => setBackInput(e.target.value)}
          required
        />
        <button type="submit">Add Word</button>
      </form>

      {words.map((word) => (
        <WordCard key={word.id} front={word.front} back={word.back} />
      ))}
    </main>
  );
}

export default App;