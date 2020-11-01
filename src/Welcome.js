import React from "react";
import "./Welcome.css";

export default function Welcome({ startTrivia }) {
  return (
    <div className="welcomeCard__container">
      <h2>Welcome to the Trivia Challenge</h2>
      <div className="welcomeCard">
        <article className="article">
          The instructions are pretty easy: you have 10 questions, try to get as
          many as you can correct! Have fun and best of luck!
        </article>
        <button className="submitButton" onClick={startTrivia}>
          Start
        </button>
      </div>
    </div>
  );
}
