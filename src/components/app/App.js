import style from './App.module.css'
import logo from '../../assets/logo.svg'
import Input from '../Input/Input';
import Output from '../Output/Output';

import { useState } from 'react'

function App() {

    const [bill, setBill] = useState(0);
    const [peopleNum, setPeopleNum] = useState(0);
    const [tip, setTip] = useState(0);
   
    let tipPerPerson = 0
    let totalBillPerPerson = 0;

    if (peopleNum && tip) {
        tipPerPerson = (bill * (tip / 100)) / peopleNum;
        totalBillPerPerson = (bill / peopleNum) + tipPerPerson;
    }
    
    function onChangeState(action, value = '') {
        switch(action) {
            case 'Bill': 
                setBill(value);
                break;
            
            case 'People': 
                setPeopleNum(value);
                break;
            
            case 'Tip': 
                setTip(value);
                break;
            
            case 'Custom': 
                setTip(value);
                break;
            
            case 'Reset': 
                setBill(0);
                setTip(0);
                setPeopleNum(0);
                break;
        }
    }

    return(
        <>
            <img className={style.logo} src={logo} alt="App Logo" />
            <div className={style.container}>
                <Input onChangeState={onChangeState}/>
                <Output 
                    tipPerPerson={tipPerPerson}
                    totalBillPerPerson={totalBillPerPerson}
                    onChangeState={onChangeState}
                />
            </div>
        </>
    );
}

export default App;