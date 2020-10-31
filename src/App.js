import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Welcome from './Welcome';
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
      currentQuestion: " ",
      currentAnswerOptions: [],
      correctAnswer: "",
      answer: "",
      // answersCount: {},
      result: 0,
      currentShuffledQuestions: [],
      triviaStarted: false,
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.startTrivia = this.startTrivia.bind(this);
  }

  componentDidMount() {
    // const shuffledAnswerOptions = data.map((question) =>
    //   this.shuffledArray(question.incorrect.concat(question.correct))
    // );
    /* data: [{question: , correct: , incorrect: }, {question: , correct: , incorrect: }]*/
    const shuffledQuestions = this.shuffledArray(data, 10);

    this.setState({
      currentQuestion: shuffledQuestions[0].question,
      currentAnswerOptions: shuffledQuestions[0].incorrect.concat(
        shuffledQuestions[0].correct
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
    if (
      this.state.currentQuestionId < 10 &&
      this.state.answer === this.state.correctAnswer
    ) {
      let newRes = this.state.result;
      this.setState({ result: (newRes += 1) });
      setTimeout(() => this.setNextQuestion(), 300);
    } else if (
      this.state.currentQuestionId < 10 &&
      this.state.answer !== this.state.correctAnswer
    ) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => console.log(`you scored ${this.state.result}`), 300);
    }
  }

  handleAnswerSelected(e) {
    /* once user picks an answer:
    we should set it as the answer */
    this.setAnswer(e.currentTarget.value);
  }

  startTrivia() {
    this.setState({ triviaStarted: true })
  }

  setAnswer(answer) {
    this.setState({
      answer: answer,
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const currentQuestionId = this.state.currentQuestionId + 1;
    this.setState({
      correctAnswer: this.state.currentShuffledQuestions[counter].correct,
      counter: counter,
      currentQuestionId: currentQuestionId,
      currentQuestion: this.state.currentShuffledQuestions[counter].question,
      currentAnswerOptions: this.state.currentShuffledQuestions[
        counter
      ].incorrect.concat(this.state.currentShuffledQuestions[counter].correct),
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
          />
          <Options
            currentAnswerOptions={this.state.currentAnswerOptions}
            handleSubmit={this.handleSubmit}
            handleAnswerSelected={this.handleAnswerSelected}
            currentAnswer={this.state.answer}
          />
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
        <Result
          result={this.state.result}
          currentQuestionId={this.state.currentQuestionId}
        />
        <Footer />
      </div>
      );
    }
  }
}

export default App;
