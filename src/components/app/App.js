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
    



    function onBillChange(val) {
        setBill(val);
    };

    function onPeopleNumChange(val)  {
        setPeopleNum(val);
    };

    function onTipChange(val) {
        setTip(val);
    };

    

    return(
        <>
            <img className={style.logo} src={logo} alt="App Logo" />
            <div className={style.container}>
                <Input 
                onBillChange={onBillChange}
                onPeopleNumChange={onPeopleNumChange}
                onTipChange={onTipChange}
                
                />
                <Output 
                tipPerPerson={tipPerPerson}
                totalBillPerPerson={totalBillPerPerson}
                />
            </div>
        </>
        
    );
}

export default App;