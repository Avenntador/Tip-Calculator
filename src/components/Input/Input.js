import style from './Input.module.css'
import Bill from './Bill/Bill';
import TipSelect from './TipSelect/TipSelect';
import PeopleInput from './PeopleInput/PeopleInput';

function Input(props) {
    return(
        <div className={style.inputContainer}>
            <Bill onBillChange={props.onBillChange}/>
            <TipSelect onTipChange={props.onTipChange}/>
            <PeopleInput onPeopleNumChange={props.onPeopleNumChange}/>
        </div>
    )
}

export default Input;