import React from 'react';
import './Counter.css'

type CounterPropsType = {
    number: number
    maxNumber: number
    increaseNumber: () => void
    resetNumber: () => void
}

function Counter(props: CounterPropsType) {
    const incIsDisabled = () => {
        return props.number > props.maxNumber ? true : false
    }
    const resetIsDisabled = () => {
        return props.number === 0 ? true : false
    }

    const styleMaxNumber = {
        fontSize: "30px",
        color: props.number <= props.maxNumber ? "black" : "red",
    }
    const styleDisable = {
        opacity: props.number > props.maxNumber ? "0.5" : "1"
    }

    return <div className={'container'}>
        <div className={`display`}>
            <span style={styleMaxNumber}>{props.number}</span>
        </div>
        <div className={`buttons`}>
            <button
                className={`btn`}
                style={styleDisable}
                onClick={props.increaseNumber}
                disabled={incIsDisabled()}>inc
            </button>
            <button
                className={`btn`}
                onClick={props.resetNumber}
                disabled={resetIsDisabled()}>reset
            </button>
        </div>
    </div>
}

export default Counter;
