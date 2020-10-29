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
      <label>
        <input
          className="options__button"
          type="radio"
          name={answerChoice}
          value={answerChoice}
          checked={false}
          onChange={handleAnswerSelected}
        />{" "}
        {answerChoice}
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
