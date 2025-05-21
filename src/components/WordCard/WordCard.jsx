import React, { useState } from "react";
import "./WordCard.css";

export default function WordCard({ front, back }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="word-card"
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <p className="card-front">
        {isFlipped ? back : front}
      </p>
    </div>
  );
}