import React, {useState} from 'react';
import './App.css';
import Counter from "./counter/Counter";
import Settings from "./settings/Settings";

function App() {
    let [number, setNumber] = useState<number>(0);
    // const maxNumber = 4;
    let [maxNumber, setMaxNumber] = useState<number>(4)

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

    function updateMax(enteredValue: number) {
        setMaxNumber(enteredValue)
    }
    function updateStart(enteredValue: number) {
        setNumber(enteredValue);
    }

    return (
        <div>
            <Counter
                number={number}
                maxNumber={maxNumber}
                increaseNumber={increaseNumber}
                resetNumber={resetNumber}
            />
            <Settings
                number={number}
                maxNumber={maxNumber}
                onMaxUpdate={updateMax}
                onStartUpdate={updateStart}
            />
        </div>
    );
}

export default App;
