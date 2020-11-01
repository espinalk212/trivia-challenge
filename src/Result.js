import React from "react";
import "./Result.css";

function Result({ result }) {
  return (
    <div className="resultCard__container">
      <div className="resultCard">
        <h2>You scored {result} correct out of 10 questions!</h2>
        <button
          className="submitButton"
          onClick={() => window.location.reload(false)}
        >
          Play Again!
        </button>
      </div>
    </div>
  );
}

export default Result;
