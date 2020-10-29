import React from "react";
import "./Question.css";

function Question({ currentQuestion, currentQuestionNumber, totalQuestions }) {
  return (
    <div className="question__container">
      <div>
        <h2 className="question">{currentQuestion}</h2>
        <h6>
          Question {currentQuestionNumber} out of {totalQuestions}
        </h6>
      </div>
    </div>
  );
}

export default Question;
