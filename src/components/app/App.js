import style from './App.module.css'
import logo from '../../assets/logo.svg'
import Input from '../Input/Input';
import Output from '../Output/Output';

import { useState } from 'react'

function App() {

    const [billInput, setBillInput] = useState('');
    const [peopleNumInput, setPeopleNumInput] = useState('');
    const [tipVal, setTipVal] = useState('');
    const [customTip, setCustomTip] = useState('');
    const [active, setActive] = useState(-1);


    let tipPerPerson = 0
    let totalBillPerPerson = 0;
    let tip;
    
    customTip ? tip = customTip : tip = tipVal;

    if (peopleNumInput && tip) {
        tipPerPerson = (billInput * (tip / 100)) / peopleNumInput;
        totalBillPerPerson = (billInput / peopleNumInput) + tipPerPerson;
    }


    function onChangeState(action, value = '') {
        switch(action) {
            case 'Bill': 
                setBillInput(value);
                break;
            
            case 'People': 
                setPeopleNumInput(value);
                break;
            
            case 'Tip': 
                setTipVal(value);
                setCustomTip('');
                break;
            
            case 'Custom': 
                setCustomTip(value);
                setTipVal('');
                break;
            
            case 'Reset': 
                setBillInput('');
                setPeopleNumInput('');
                setTipVal('');
                setCustomTip('');
                break;
        }
    }

    return(
        <>
            <img className={style.logo} src={logo} alt="App Logo" />
            <div className={style.container}>
                <Input 
                    onChangeState={onChangeState}
                    billInput={billInput}
                    peopleNumInput={peopleNumInput}
                    customTip={customTip}
                    active={active}
                    setActive={setActive}
                />
                <Output 
                    tipPerPerson={tipPerPerson}
                    totalBillPerPerson={totalBillPerPerson}
                    onChangeState={onChangeState}
                    setActive={setActive}
                />
            </div>
        </>
    );
}

export default App;