import style from './Input.module.css'
import Bill from './Bill/Bill';
import TipSelect from './TipSelect/TipSelect';
import PeopleInput from './PeopleInput/PeopleInput';

function Input() {
    return(
        <div className={style.inputContainer}>
            <Bill />
            <TipSelect />
            <PeopleInput />
        </div>
    )
}

export default Input;