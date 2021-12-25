import style from './TipSelect.module.css'
import Tip from './Tip/Tip';
import CustomInput from '../CustomInput/CustomInput';

import { useState } from 'react';

const tips = [5, 10, 15, 25, 50];



function TipSelect({onChangeState, customTip, active, setActive}) {

    
    let activeStyle;

    return(
        <div>
            <p className={style.header}>Select Tip %</p>
            <div className={style.tipsContainer}>
                {tips.map((tip,i) => {
                    return(
                        <Tip 
                        tipid={i}
                        onChangeState={onChangeState} 
                        setActive={setActive}
                        key={i} 
                        amount={tip}
                        activeStyle={active == i ? activeStyle = 'active' : activeStyle = ''}
                        />
                    )
                })}
                <CustomInput customTip={customTip} onChangeState={onChangeState} setActive={setActive}/>
            </div>
        </div>      
    );
}

export default TipSelect;