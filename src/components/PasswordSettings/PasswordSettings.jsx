import React from 'react';
import PasswordSetting from "./PasswordSetting/PasswordSetting";
import classes from "./PasswordSettings.module.scss";

function PasswordSettings({symbols, numbers, useSymbols, useNumbers, createPassword}) {
    const useSymbolsBtn = () =>{
        useSymbols(!symbols)
        createPassword()
    }
    const useNumbersBtn = () =>{
        useNumbers(!numbers)
        createPassword()
    }

    return (
        <div className={classes.password_settings}>
            <PasswordSetting value={symbols} onClick={useSymbolsBtn} name={"Use special symbols"}/>
            <PasswordSetting value={numbers} onClick={useNumbersBtn} name={"Use numbers"}/>
        </div>
    );
}

export default PasswordSettings;