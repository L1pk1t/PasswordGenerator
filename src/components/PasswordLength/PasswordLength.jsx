import React from 'react';
import classes from "./PasswordLength.module.scss";
import MainRangeSlider from "../UI/MainRangeSlider/MainRangeSlider";
import RangeCounter from "../UI/RangeCounter/RangeCounter";

const PasswordLength = ({length, setLength, createPassword, setPasswordValue}) => {
    return (
        <div className={classes.main}>
             <RangeCounter
                 length={length}
                 setLength={setLength}
                 createPassword={createPassword}
                 setPasswordValue={setPasswordValue}
             />
            <MainRangeSlider
                length={length}
                setLength={setLength}
                createPassword={createPassword}
                setPasswordValue={setPasswordValue}
            />
        </div>
    );
};

export default PasswordLength;
