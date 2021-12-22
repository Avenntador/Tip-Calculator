import style from './Tip.module.css'
import React from 'react'

function Tip(props) {

    const refTip = React.createRef();
    function getTip(e) {
         props.onTipChange(parseInt(refTip.current.textContent));
    }

    return(
        <div 
            ref={refTip} 
            onClick={getTip} 
            className={style.tipItem}
        >
                {props.amount}%
        </div>
    );
}

export default Tip;