import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question-container'>
            <div className='first-question'>
                <h2>Q1.How react work?</h2>
                <p>Answer: Think of HTML code as a tree. In fact, that is exactly <br /> how the browser treats DOM ( rendered HTML on the browser). <br /> React allows to effectively re-construct <br /> DOM in JavaScript and push only those <br /> changes to the DOM which have actually occurred.</p>
            </div>
            <div className='second-question'>
                <h2>Q2.How useState() work?</h2>
                <p>Answer: useState is a Hook (function) that allows you to have state <br /> variables in functional components. You pass the initial state to this function <br /> and it returns a variable with the current <br /> state value (not necessarily the initial state) and another <br /> function to update this value</p>
            </div>
        </div>
    );
};

export default Question;