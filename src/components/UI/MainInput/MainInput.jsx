import React from 'react';
import classes from "./MainInput.module.scss";
import PasswordStrength from "../../PasswordStrength/PasswordStrength";

const MainInput = ({passwordValue, createPassword, setPasswordValue}) => {

    let isCopied = false

    const copyText = async () => {
        try{
            await navigator.clipboard.writeText(passwordValue)
            isCopied = true
            setTimeout(() => {
                isCopied = false
            }, 1500)
        } catch (e) {
            console.error('e', e)
        }
    }

    return (
        <div className={classes.input_block}>
            <img onClick={copyText} className={classes.copy} src="/img/copy.svg" alt="copy"/>
            <img onClick={createPassword} className={classes.create} src="/img/create.svg" alt="create"/>
            <input onChange={setPasswordValue} value={passwordValue}/>
            <PasswordStrength passwordValue={passwordValue}/>
        </div>
    );
};

export default MainInput;
