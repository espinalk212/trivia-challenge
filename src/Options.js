import React from "react";
import "./Options.css";

function Options({
  currentAnswerOptions,
  handleSubmit,
  handleAnswerSelected,
  currentAnswer,
}) {
  const label = currentAnswerOptions.map((answerChoice) => {
    return (
      <label className="customRadioButton__container">
        {answerChoice}
        <input
          className="options__button"
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
        <button className="submit__button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Options;
