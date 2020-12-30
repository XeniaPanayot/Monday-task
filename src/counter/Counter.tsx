import React from 'react';
// import './Counter.css'
import styles from './Counter.module.css'
import Button from "./Button";

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

    const onIncreaseHandler = props.increaseNumber;
    const onResetHandler = props.resetNumber;

    const incClass = props.number > props.maxNumber ? `${styles.btn} ${styles.btnInc} ${styles.disabledBtn}` : `${styles.btn} ${styles.btnInc}`;
    const resetClass = props.number === 0 ? `${styles.btn} ${styles.btnReset} ${styles.disabledBtn}` : `${styles.btn} ${styles.btnReset}`;


    return <div className={styles.container}>
        <div className={styles.display}>
            <span
                className={props.number <= props.maxNumber ? styles.count : `${styles.count} ${styles.maxCount}`}>
                {props.number}
            </span>
        </div>
        <div className={styles.buttons}>
            <Button
                name={'add one'}
                onClick={props.increaseNumber}
                className={incClass}
                disabled={incIsDisabled()}
            />
            <Button
                name={'reset'}
                onClick={props.resetNumber}
                className={resetClass}
                disabled={resetIsDisabled()}
            />
        </div>
    </div>
}

export default Counter;
