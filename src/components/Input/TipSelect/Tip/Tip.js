import './Tip.css';
import React from 'react';


function Tip({amount, onChangeState, tipid, activeStyle, setActive}) {


    function clickHandler(e) {
        onChangeState('Tip', parseInt(e.target.textContent));
        setActive(e.target.getAttribute('activeid'));
    }

    return(
        <div activeid={tipid} onClick={(e) => {clickHandler(e)}} className={`tipItem ${activeStyle}`}>
            {amount}%
        </div>
    );
}

export default Tip;