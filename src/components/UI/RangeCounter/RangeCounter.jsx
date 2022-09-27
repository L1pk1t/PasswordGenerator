import React from 'react';
import classes from "./RangeCouner.module.scss";

const RangeCounter = ({length, setLength,createPassword, setPasswordValue}) => {

    const onInput = (e) => {
        setLength(e.target.value)
        setPasswordValue()
    }

    return (
        <div className={classes.main}>
            <input onChange={onInput} value={length} type="number" maxLength={3}/>
        </div>
    );
}

export default RangeCounter;