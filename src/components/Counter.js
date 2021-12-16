import React, { useState } from "react";

const Counter = (props) => {
    let [ counter, setCounter ] = useState(0);
    // Value of a variable -> Variable holding a value
    // Set a value to the variable -> Function

    let { text, other } = props;

    return (
        <button
            className = "button"
            onClick = { () => setCounter(counter+1) }
            data-testid = 'counter'
        >
            { counter }
        </button>
    );
}

export default Counter;