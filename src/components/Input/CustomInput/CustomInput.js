import style from './CustomInput.module.css'


function CustomInput({ onChangeState, customTip, setActive }) {

function changeHandler(e) {
    onChangeState('Custom', e.target.value);
    setActive(-1);
}

    return(
        <div>
            <input value={customTip} onChange={(e) => {changeHandler(e)}} className={style.customInput} type="number" placeholder="Custom"/>
        </div>
    )
}

export default CustomInput;