import React from "react";
import "./Question.css";

function Question({ currentQuestion, currentQuestionNumber, totalQuestions, result }) {
  return (
    <div className="question__container">
      <div>
        <h2 className="question">{currentQuestion}</h2>
        <h6>
          Question {currentQuestionNumber} out of {totalQuestions}
        </h6>
        <h4>Your score: {result}</h4>
      </div>
    </div>
  );
}

export default Question;
