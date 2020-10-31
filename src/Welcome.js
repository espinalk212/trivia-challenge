import React from "react";
import './Welcome.css';

export default function Welcome({ startTrivia }) {
  return (
    <div className="welcomeCard__container">
      <div className="welcomeCard">
        <h3>Welcome to the Trivia Challenge</h3>
        <article>
          The instructions are pretty clear: you have 10 questions, try to get
          as many as you can correct! Have fun and best of luck!
          <button className="submit__button" onClick={startTrivia}>Start</button >
        </article>
      </div>
    </div>
  );
}
