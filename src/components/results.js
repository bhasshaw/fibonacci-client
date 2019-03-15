import React from 'react';
import './results.css';

const Results = ({ results }) => {

    let numbers = results.map((number, i) => (
        <div key={i}>{number}</div>
    ));

    return (
        <div>
            {numbers}
        </div>
    );
}

export default Results;