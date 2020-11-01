import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Welcome from "./Welcome";
import Question from "./Question";
import Result from "./Result";
import Options from "./Options";
import Footer from "./Footer";
import data from "./Tandem_Apprentice_Challenge_2020/Apprentice_TandemFor400_Data.json";

class App extends Component {
  constructor(props) {
    super(props);

    /* we need to keep track of the current question, it's id, the current answer options,
    the actual answer (data[correct]), and the obj where we are storing the questions */
    this.state = {
      counter: 0,
      currentQuestionId: 1,
      currentQuestion: "",
      currentAnswerOptions: [],
      correctAnswer: "",
      answer: "",
      result: 0,
      currentShuffledQuestions: [],
      triviaStarted: false,
      gameOver: false,
      displayCorrectAnswer: false,
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.startTrivia = this.startTrivia.bind(this);
  }

  componentDidMount() {
    const shuffledQuestions = this.shuffledArray(data, 10);

    this.setState({
      currentQuestion: shuffledQuestions[0].question,
      currentAnswerOptions: this.shuffledArray(
        shuffledQuestions[0].incorrect.concat(shuffledQuestions[0].correct)
      ),
      correctAnswer: shuffledQuestions[0].correct,
      currentShuffledQuestions: shuffledQuestions,
    });
  }

  shuffledArray(array, length = array.length) {
    let newArray = [];
    while (newArray.length < length) {
      let randomIndex = Math.floor(Math.random() * array.length);
      let newValue = array[randomIndex];
      if (!newArray.includes(newValue)) {
        newArray.push(newValue);
      }
    }
    return newArray;
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.currentQuestionId < 10 && this.state.answer === "") {
      alert("Please Pick An Option");
    } else if (
      this.state.currentQuestionId < 10 &&
      this.state.answer === this.state.correctAnswer
    ) {
      let newRes = this.state.result;
      this.setState({ result: (newRes += 1), displayCorrectAnswer: true });
      setTimeout(() => this.setState({ displayCorrectAnswer: false }), 600);
      setTimeout(() => this.setNextQuestion(), 600);
    } else if (
      this.state.currentQuestionId < 10 &&
      this.state.answer !== this.state.correctAnswer
    ) {
      this.setState({ displayCorrectAnswer: true });
      setTimeout(() => this.setState({ displayCorrectAnswer: false }), 600);
      setTimeout(() => this.setNextQuestion(), 600);
    } else {
      this.setState({ displayCorrectAnswer: true });
      setTimeout(() => this.setState({ displayCorrectAnswer: false }), 600);
      setTimeout(
        () => this.setState({ triviaStarted: false, gameOver: true }),
        600
      );
    }
  }

  handleAnswerSelected(e) {
    /* once user picks an answer:
    we should set it as the answer */
    this.setAnswer(e.currentTarget.value);
  }

  setAnswer(answer) {
    this.setState({
      answer: answer,
    });
  }
  startTrivia() {
    this.setState({ triviaStarted: true });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const currentQuestionId = this.state.currentQuestionId + 1;
    this.setState({
      correctAnswer: this.state.currentShuffledQuestions[counter].correct,
      counter: counter,
      currentQuestionId: currentQuestionId,
      currentQuestion: this.state.currentShuffledQuestions[counter].question,
      currentAnswerOptions: this.shuffledArray(
        this.state.currentShuffledQuestions[counter].incorrect.concat(
          this.state.currentShuffledQuestions[counter].correct
        )
      ),
      answer: "",
    });
  }

  render() {
    if (this.state.triviaStarted === true) {
      return (
        <div className="app">
          <Header />
          <Question
            currentQuestionNumber={this.state.currentQuestionId}
            currentQuestion={this.state.currentQuestion}
            totalQuestions={10}
            result={this.state.result}
          />
          <Options
            displayCorrectAnswer={this.state.displayCorrectAnswer}
            correctAnswer={this.state.correctAnswer}
            currentAnswerOptions={this.state.currentAnswerOptions}
            handleSubmit={this.handleSubmit}
            handleAnswerSelected={this.handleAnswerSelected}
            currentAnswer={this.state.answer}
          />
          <Footer />
        </div>
      );
    } else if (
      this.state.triviaStarted === false &&
      this.state.gameOver === true
    ) {
      return (
        <div className="app">
          <Header />
          <Result
            result={this.state.result}
            currentQuestionId={this.state.currentQuestionId}
          />
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="app">
          <Header />
          <Welcome startTrivia={this.startTrivia} />
          <Footer />
        </div>
      );
    }
  }
}

export default App;
