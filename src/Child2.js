import React, { useReducer } from 'react';
import counterReducer from './CounterReducer';

const Child2 = () => {
    let [state,dispatch] = useReducer(counterReducer, 1);
    console.log(state);
    return (
        <div>
            <h1>This is using Reducer</h1>
            <h3>This is Child2</h3>
            <h3>Value of reducer state is {state}</h3>
            <button onClick={()=>dispatch('INCREMENT')}>Increment Reducer</button>
        </div>
    )
}

export default Child2;