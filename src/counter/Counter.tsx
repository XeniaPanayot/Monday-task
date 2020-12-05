import React from 'react';
// import './Counter.css'
import styles from './Counter.module.css'

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

    // const styleMaxNumber = {
    //     fontSize: "30px",
    //     color: props.number <= props.maxNumber ? "black" : "red",
    // }
    // const styleDisable = {
    //     opacity: props.number > props.maxNumber ? "0.5" : "1"
    // }

    return <div className={styles.container}>
        <div className={styles.display}>
            <span
                className={props.number <= props.maxNumber ? styles.count : `${styles.count} ${styles.maxCount}`}>
                {props.number}
            </span>
        </div>
        <div className={styles.buttons}>
            <button
                className={ props.number > props.maxNumber ? `${styles.btn} ${styles.btnInc} ${styles.disabledBtn}` : `${styles.btn} ${styles.btnInc}`}
                onClick={props.increaseNumber}
                disabled={incIsDisabled()}>inc
            </button>
            <button
                className={ props.number === 0 ? `${styles.btn} ${styles.btnReset} ${styles.disabledBtn}` : `${styles.btn} ${styles.btnReset}`}
                onClick={props.resetNumber}
                disabled={resetIsDisabled()}>reset
            </button>
        </div>
    </div>
}

export default Counter;
