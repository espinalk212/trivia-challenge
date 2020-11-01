# [Trivia-Challenge](https://espinalk212.github.io/trivia-challenge/)

### Background and Overview 
This is a fun little trivia web app created with React and Material-UI icons, the data was shared by [Tandem](https://madeintandem.com/) for their software engineer apprenticeship coding challenge.

Wallpaper from [FreeVector.com](https://www.freevector.com/pastel-background-30546)



### Functionality and MVPs
- Header with Github, LinkedIn and Portfolio site links 
  - dynamically changes to hamburger menu on mobile devices (*planning to implement a drawer with the links on mobile*)
  
- Welcome card component with brief overview as well as a `Start` button to initiate Trivia Challenge

- Question and Trivia components that render as one card and display: 
    - current question
    - question number
    - current score
    - current answer choices
    
  on submit:
    - message stating whether the user choice was correct and the correct answer
    
 - Result card component which displays the final score and provides a `Play Again!` button to restart Trivia Challenge
    


### Challenges and things I learned

 - Challenge: Checking to see if the trivia was on going in order to show proper component
   - Solution: Instantiate a boolean type key value pair that gets set to true once the `Start` button has been clicked and to false once the user has user has went through the questions
   
 - Challenge: Showing the user the correct answer only after the user submits an answer and then disappears before the next question renders
   - Solution: Create a boolean type key value pair that gets set to true after the user presses the submit button, it shows a `<p>` tag with the correct answer and then after an interval gets reset back to false and sets the next question
   
 - Challenge: Randomizing and selecting only 10 questions from the data provided, randomizing the order in which the answer options rendered
    - Solution: Develop a function whose first argument is an array (with an optional 2nd parameter that takes in a number (for the questions the number 10 was the argument, for the answers the default)), this function creates a new array and until it reaches a certain length it picks a random index from the original array and adds it to the new array. 
   
 


### Visual

![image](https://i.imgur.com/gFEw62o.png)


### Architecture and Technology

[ReactJS Framework](https://reactjs.org/) ver 17.0.1,

[Material-UI icons](https://material-ui.com/) ver. 4.9.1,

JavaScript, 

CSS, Babel, Webpack, Jest (all included in React-Create-App)


### Implementation Timeline

Day 1: Create-React-App, Initialize Repo, Create and publish Readme 

Day 2: Implement App.js, Header.js, Welcome.js, Question.js

Day 3: Implement Options.js, Result.js, Footer.js

Day 4: Style all components

Day 5: Host on Github Pages



### Basic File Structure
- src/

  - TandemApprenticeshipChallenge2020/
    - Apprentice_TandemFor400_Data.json
    
  - app.js
  - Footer.js
  - Footer.css
  - Header.js
  - Header.css
  - Options.js
  - Options.css
  - Question.js
  - Question.css
  - Result.js
  - Result.css
  - Welcome.js
  - Welcome.css


    

   
    
    
    



### Code Snippet
- src/Options.js
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
### Code Snippet
Clone repo and run from terminal:
```Javascript
npm install
```
(this will install all the required dependencies) after install run from the terminal:
```Javascript
npm start
```
(this will start the scripts) direct browser to localhost:3000


### (Bonus Features)

- Refactor to make mobile friendly
- Implement Jest for user end testing

