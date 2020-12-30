import React, {ChangeEvent} from 'react';
import styles from '../counter/Counter.module.css'
import Button from "../counter/Button";

type SettingsPropsType = {
    number: number
    maxNumber: number
    onMaxUpdate: (enteredNumber: number) => void
    onStartUpdate: (enteredNumber: number) => void
}


function Settings(props: SettingsPropsType) {
    const onMaxValueChange = (event: ChangeEvent<HTMLInputElement>) => {
        const maxSetting = parseInt(event.currentTarget.value);
        props.onMaxUpdate(maxSetting);
    }
    const onStartChange = (event: ChangeEvent<HTMLInputElement>) => {
        const startSetting = parseInt(event.currentTarget.value);
        props.onStartUpdate(startSetting);
    }

    return <div className={styles.container}>
        <div className={`${styles.display} ${styles.display_settings}`}>
            <div>
                <label htmlFor="max">Max value:</label>
                <input
                    type="number"
                    id="max"
                    value={props.maxNumber}
                    onChange={onMaxValueChange}
                />
            </div>
            <div>
                <label htmlFor="start">Start value:</label>
                <input
                    type="number"
                    id="start"
                    value={props.number}
                    onChange={onStartChange}
                />
            </div>

        </div>
        <div className= {`${styles.buttons} ${styles.btnSet}`}>
            <Button
                name={"set"}
                onClick={() => {
            }}
                className={`${styles.btn}  ${styles.btnSet}`}
                disabled={false}/>
        </div>
    </div>
}

export default Settings;
