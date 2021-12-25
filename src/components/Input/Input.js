import style from './Input.module.css'
import Bill from './Bill/Bill';
import TipSelect from './TipSelect/TipSelect';
import PeopleInput from './PeopleInput/PeopleInput';

function Input( { onChangeState, billInput, peopleNumInput, customTip, active, setActive }) {
    return(
        <div className={style.inputContainer}>
            <Bill onChangeState={onChangeState} billInput={billInput}/>
            <TipSelect onChangeState={onChangeState} customTip={customTip} active={active} setActive={setActive}/>
            <PeopleInput onChangeState={onChangeState} peopleNumInput={peopleNumInput} />
        </div>
    )
}

export default Input;