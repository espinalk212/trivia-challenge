# [Trivia-Challenge](https://espinalk212.github.io/trivia-challenge/)

### Background and Overview 




### Functionality and MVPs





### Visual

![image](https://i.imgur.com/WfuZ5lP.png)

### Architecture and Technology

[ReactJS Framework]()
[Material UI icons]()
JS, 
CSS, 
Webpack,



### Implementation Timeline
Day 1: 
Day 2: 
Day 3: 
Day 4: 
Day 5: Style page, add links, source



### Basic File Structure
- src/

  - TandemApprenticeshipChallenge2020/
    - Apprentice_TandemFor400_Data.json

  - components/
    - Footer.js
    - Header.js
    - Options.js
    - Question.js
    - Result.js
    - Welcome.js

  - styles/
    - Footer.css
    - Header.css
    - Options.css
    - Question.css
    - Result.css
    - Welcome.css

  - app.js

### Code Snippet
- Options.js
```Javascript
return (
    <div className="form__container">
      <form className="form">
        {label}
        {displayCorrectAnswer ? (
          <p className="showAnswer">
            {correctAnswer === currentAnswer
              ? `Yay! You got the correct answer: ${correctAnswer}`
              : `Oops! The correct answer: ${correctAnswer}`}
          </p>
        ) : (
          " "
        )}
      </form>
      <button className="submitButton" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
```



### (Bonus Features)

- Refactor to make mobile friendly

