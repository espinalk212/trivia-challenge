import React from "react";
import Button from "@material-ui/core/Button";

function Options({
  currentAnswerOptions,
  handleSubmit,
  handleAnswerSelected,
  currentAnswer,
}) {
  const label = currentAnswerOptions.map(answerChoice => {
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
    <form className="form">
      {label}
      <Button
        className="submit__button"
        variant="contained"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </form>
  );
}

export default Options;
