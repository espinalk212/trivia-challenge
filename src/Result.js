import React from "react";

function Result({ result, currentQuestionId }) {
  if (currentQuestionId <= 10) {
    return (
      <div>
        <h1>Your score: {result} </h1>
      </div>
    );
  } else {
    return (
      <div>
        You scored {result} out of 10 questions!
      </div>
    )
  }
}

export default Result;
