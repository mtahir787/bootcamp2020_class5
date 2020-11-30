import React, {useContext} from 'react';
import counterContext from './CounterContext';
import GrandChild from './GrandChild';

const Child = () => {
    let counterValue = useContext(counterContext);
    console.log(counterValue);
    return (
        <div>
            <h1>This is first child</h1>
            <h3>Counter value is {counterValue[0]}</h3>
            <br />
            <button onClick={ () => {counterValue[1](++counterValue[0])}}>Increment</button>
            <hr style={{marginTop: 50}}/>
            <GrandChild/>
        </div>
    )
}

export default Child;