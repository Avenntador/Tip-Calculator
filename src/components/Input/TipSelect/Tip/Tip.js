import style from './Tip.module.css'
import React from 'react'

function Tip({amount, onChangeState}) {
    return(
        <div onClick={(e) => {onChangeState('Tip', parseInt(e.target.textContent))}} className={style.tipItem}>
            {amount}%
        </div>
    );
}

export default Tip;