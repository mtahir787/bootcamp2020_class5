import React,{useState} from 'react';
import './App.css';
import Parent from './Parent';
import counterContext from './CounterContext';

function App() {
  let countState = useState(1); // let [count, setcount] = usestate(300);
  return (
    <counterContext.Provider value={countState}>
      <div className="box">
        <Parent/>
      </div>
    </counterContext.Provider>
  );
}

export default App;
