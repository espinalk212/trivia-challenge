import React from "react";
import "./Options.css";

function Options({
  displayCorrectAnswer,
  correctAnswer,
  currentAnswerOptions,
  handleSubmit,
  handleAnswerSelected,
  currentAnswer,
}) {
  const label = currentAnswerOptions.map((answerChoice, idx) => {
    return (
      <label className="customRadioButton__container" key={idx}>
        {answerChoice}
        <input
          className="optionsButton"
          type="radio"
          name={answerChoice}
          value={answerChoice}
          checked={answerChoice === currentAnswer}
          onChange={handleAnswerSelected}
        />
        <span className="customRadioButton"></span>
      </label>
    );
  });
  return (
    <div className="form__container">
      <form className="form">
        {label}
        {displayCorrectAnswer ? (
          <h4 className="showAnswer">
            {correctAnswer === currentAnswer
              ? `Yay! You got the correct answer: ${correctAnswer}`
              : `Oops! The correct answer: ${correctAnswer}`}
          </h4>
        ) : (
          " "
        )}
      </form>
      <button className="submitButton" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Options;
