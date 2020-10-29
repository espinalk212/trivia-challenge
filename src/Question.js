import React from "react";
import "./Question.css";

function Question({ currentQuestion, currentQuestionNumber, totalQuestions }) {
  return (
    <div className="Question">
      <h2>{currentQuestion}</h2>
      <h6>
        Question {currentQuestionNumber} out of {totalQuestions}
      </h6>
    </div>
  );
}

export default Question;
