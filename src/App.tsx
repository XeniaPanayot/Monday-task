import React, {useState} from 'react';
import './App.css';
import Counter from "./counter/Counter";

function App() {
    let [number, setNumber] = useState<number>(0);
    const maxNumber = 4;

    function increaseNumber() {
        if (number <= maxNumber) {
            let newNumber = number + 1;
            setNumber(newNumber);
        } else {
            setNumber(0);
        }
    }

    function resetNumber() {
        setNumber(0);
    }

    return (
        <Counter
            number={number}
            maxNumber={maxNumber}
            increaseNumber={increaseNumber}
            resetNumber={resetNumber}
        />
    );
}

export default App;
