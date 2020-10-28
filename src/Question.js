import React from "react";
import './Question.css';

function Question({ props }) {
    return (
      <div className='Question'>
        <h2>{props}</h2>
      </div>
    );

}

export default Question;
