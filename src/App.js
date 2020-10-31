import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
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
      answer: "",
      answersCount: {},
      result: "",
    };

  //   this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
 }

  componentDidMount() {
    const shuffledAnswerOptions = data.map((question) =>
      this.shuffledArray(question.incorrect.concat(question.correct))
    );

    this.setState({
      currentQuestion: data[0].question,
      currentAnswerOptions: shuffledAnswerOptions[0],
      answer: data[0].correct,
    });
  }

  shuffledArray(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.questionId < data.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  // handleAnswerSelected(e) {
  //   /* once user picks an answer:
  //   we should set it as the answer,
  //   check to see if there are any questions left ? get the next question : get results */
  //   this.setAnswer(e.currentTarget.value);
  //   if (this.state.questionId < data.length) {
  //     setTimeout(() => this.setNextQuestion(), 300);
  //   } else {
  //     setTimeout(() => this.setResults(this.getResults()), 300);
  //   }
  // }

  setAnswer(answer) {
    this.setState((state) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1,
      },
      answer: answer,
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState((state) => ({
      counter: counter,
      questionId: questionId,
      question: this.state.currentQuestion[counter].question,
      answerOptions: this.state.currentQuestion[counter].answers,
      answer: "",
    }));
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(
      (key) => answersCount[key] === maxAnswerCount
    );
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: "Undetermined" });
    }
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Question
          currentQuestionNumber={this.state.currentQuestionId}
          currentQuestion={this.state.currentQuestion}
          totalQuestions={data.length}
        />
        <Options
          currentAnswerOptions={this.state.currentAnswerOptions}
          handleSubmit={this.handleSubmit}
          handleAnswerSelected={this.handleAnswerSelected}
          currentAnswer={this.state.answer}
        />
        <Footer />
      </div>
    );
    //   } : {
    //     return (
    //       <div className="app">
    //         <Header />
    //         < Result result={this.state.result} totalQuestions={data.length} />
    //         <Footer />
    //       </div>
    //     );
    //   }
  }
}

export default App;
