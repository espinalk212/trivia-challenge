import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Question from "./Question";
import Result from './Result';
import Options from "./Options";
import Footer from "./Footer";
import data from "./Tandem_Apprentice_Challenge_2020/Apprentice_TandemFor400_Data.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const shuffledAnswerOptions = data.map((question) =>
      this.shuffleArray(question.incorrect.concat(question.correct))
    );
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

  render() {
   ? {
      return (
        <div className="app">
          <Header />
          < Question />
          <Options />
          <Footer />
        </div>
      );
    } : {
      return (
        <div className="app">
          <Header />
          < Result />
          <Footer />
        </div>
      );
    }

  }
}

export default App;
