import React from 'react';
import {Slider} from "@mui/material";
// import {Range} from "react-range";
import classes from "./MainRangeSlider.module.scss";

const MainRangeSlider = ({setLength, createPassword, length}) => {

    let sliderValue = ''

    const onChange = (event) => {
        setLength(event.target.value)
        createPassword()
    }

    return (
        <div className={classes.main}>
            <Slider
                className={classes.range}
                value={length}
                defaultValue={25}
                aria-label="Default"
                onChange={onChange}
                valueLabelDisplay="auto"
                sx={{
                    width: 370,
                    height: 13,
                    color: 'white',
                    '& .MuiSlider-thumb': {
                        width: 20,
                        height: 20
                    },
                    '& .MuiSlider-track':{
                        color: 'success',
                    }
                }}
                min={8}
                max={64}
            />
            {/*<input className={classes.input_main} id="face-rating" type="range" min='8' max='64' onChange={onChange}/>*/}

        </div>
    );
};

export default MainRangeSlider;
