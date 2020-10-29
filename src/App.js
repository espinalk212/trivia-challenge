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

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const shuffledAnswerOptions = data.map((question) =>
      this.shuffleArray(question.incorrect.concat(question.correct))
    );

    this.setState({
      currentQuestion: data[0].question,
      currentAnswerOptions: shuffledAnswerOptions[0],
      answer: data[0].correct
    });
  }

  shuffleArray(array) {
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
  }

  handleAnswerSelected(e) {
    /* once user picks an answer: 
    we should set it as the answer,
    check to see if there are any questions left ? get the next question : get results */
    // this.setAnswer(e.currentTarget.value);
    // if (this.state.questionId < data.length) {
    //   setTimeout(() => this.setNextQuestion(), 300);
    // } else {
    //   setTimeout(() => this.setResults(this.getResults()), 300);
    // }
  }

  setAnswer(answer) {
    this.setState({
      
    })

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
        <Options currentAnswerOptions={this.state.currentAnswerOptions}
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
    //         < Result totalQuestions={data.length} />
    //         <Footer />
    //       </div>
    //     );
    //   }
  }
}

export default App;
