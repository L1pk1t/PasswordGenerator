import React from 'react';
import classes from "./PasswordStrength.module.scss";
import zxcvbn from 'zxcvbn'

const PasswordStrength = ({passwordValue}) => {
    const testResult = zxcvbn(passwordValue)
    const num = testResult.score * 100/4
    console.log(testResult.score)


    const funcProgressColor = () => {
        switch (testResult.score) {
            case 0:
                return '#828282'
            case 1:
                return '#EA1111'
            case 2:
                return '#FFAD00'
            case 3:
                return '#9b1158'
            case 4:
                return '#00b500'
            default:
                return 'none'
        }
    }

    const changePasswordColor = () => ({
        width: `${num}%`,
        height: '100%',
        background: funcProgressColor(),
        borderRadius: '6px'
    })

    return (
        <div className={classes.progress} style={{width: '800px', height: '4px'}}>
            <div className={classes.progressBar} style={changePasswordColor()}></div>
        </div>
    );
}

export default PasswordStrength;