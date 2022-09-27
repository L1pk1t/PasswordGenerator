import React from 'react';
import classes from "./PasswordSetting.module.scss";

function PasswordSetting({name, value, onClick}) {

    return (
        <div className={classes.main}>
            <button onClick={onClick} className={value ? classes.checkbox_active : classes.checkbox}>
                <img src={value ? "/img/checkbox-checked.svg": "/img/checkbox.svg"} alt=""/>
            </button>
            <p>{name}</p>
        </div>
    );
}

export default PasswordSetting;