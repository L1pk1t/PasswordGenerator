import React, {useState} from "react";
import "./App.scss"
import {useMemo} from "react";
import MainInput from "./components/UI/MainInput/MainInput";
import PasswordLength from "./components/PasswordLength/PasswordLength";
import PasswordSettings from "./components/PasswordSettings/PasswordSettings";


function App() {
    const [passwordLength, setPasswordLength] = useState(25)
    const [passwordValue, setPasswordValue] = useState('')
    const [symbols, useSymbols] = useState(true)
    const [numbers, useNumbers] = useState(true)

    const PasswordGenerator = () => {
        let result = ''
        let characters
        let variations = {
            letters : 'AnoBqrCeDmpEstFakGHIcdfghJKLMNluvwxyOPQRSbijTUVWXYZz',
            numbers : '76958213047695821304', // eslint-disable-next-line
            symbols : '~`!@&-{#_$*()=]|%^[}+\\:;\"\'<,>.?/'
        }

        if(numbers && symbols){
            characters = (variations.symbols + variations.letters + variations.numbers).split('').sort(()=>Math.random()-0.5).join('')
        }else if(symbols){
            characters = (variations.symbols + variations.letters).split('').sort(()=>Math.random()-0.5).join('')
        }else if(numbers){
            characters = (variations.letters + variations.numbers).split('').sort(()=>Math.random()-0.5).join('')
        }else{
            characters = (variations.letters).split('').sort(()=>Math.random()-0.5).join('')
        }


        for ( let i = 0; i < passwordLength; i++ ) {
            result += characters.charAt(Math.random() * passwordLength);
        }
        setPasswordValue(result)
    }

    return (
      <div className="App">
          <h1>Password Generator</h1>
          <MainInput
              length={passwordLength}
              passwordValue={passwordValue}
              setPasswordValue={setPasswordValue}
              createPassword={PasswordGenerator}
          />
          <div className="Password">
              <PasswordSettings
                  symbols={symbols}
                  useSymbols={useSymbols}
                  numbers={numbers}
                  useNumbers={useNumbers}
                  createPassword={PasswordGenerator}
              />
              <PasswordLength
                  length={passwordLength}
                  setLength={setPasswordLength}
                  setPasswordValue={setPasswordValue}
                  createPassword={PasswordGenerator}
              />
          </div>
      </div>
  );
}

export default App;
