import React, {useContext} from 'react';
import counterContext from './CounterContext';

const GrandChild = () => {
    let counterValue = useContext(counterContext);
    console.log(counterValue);
    return (
        <div>
            <h1>This is using context api</h1>
            <h1>This is first Grandchild</h1>
            <h3>Counter value is {counterValue[0]}</h3>
            <br />
            <button onClick={ () => {counterValue[1](++counterValue[0])}}>Increment Context</button>
        </div>
    )
}

export default GrandChild;