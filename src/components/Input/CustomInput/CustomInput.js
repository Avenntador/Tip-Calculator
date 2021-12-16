import style from './CustomInput.module.css'


function CustomInput() {
    return(
        <div>
            <input className={style.customInput} type="text" defaultValue="Custom"/>
        </div>
    )
}

export default CustomInput;