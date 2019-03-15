import React from 'react';
import './results.css';

const Results = ({ results }) => {

    let numbers = results.map((number, i) => (
        <div className="number-text" key={i}>{number}</div>
    ));

    return (
        <div className="numbers-container">
            {numbers}
        </div>
    );
}

export default Results;