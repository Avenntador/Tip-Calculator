import style from './CustomInput.module.css'


function CustomInput({ onChangeState }) {

    return(
        <div>
            <input onChange={(e) => {onChangeState('Custom', e.target.value)}} className={style.customInput} type="number" placeholder="Custom"/>
        </div>
    )
}

export default CustomInput;