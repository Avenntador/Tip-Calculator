import style from './Input.module.css'
import Bill from './Bill/Bill';
import TipSelect from './TipSelect/TipSelect';
import PeopleInput from './PeopleInput/PeopleInput';

function Input( { onChangeState }) {
    return(
        <div className={style.inputContainer}>
            <Bill onChangeState={onChangeState}/>
            <TipSelect onChangeState={onChangeState}/>
            <PeopleInput onChangeState={onChangeState}/>
        </div>
    )
}

export default Input;