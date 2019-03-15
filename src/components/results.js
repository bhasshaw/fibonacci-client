import React from 'react';

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