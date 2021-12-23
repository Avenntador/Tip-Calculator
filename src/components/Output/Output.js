import style from './Output.module.css'
import Amount from './Amount/Amount';
import Total from './Total/Total';
import ResetButton from './ResetButton/ResetButton';

function Output({ tipPerPerson, totalBillPerPerson, onChangeState }) {
    return(
        <div className={style.outputContainer}>
            <Amount tipPerPerson={tipPerPerson} />
            <Total totalBillPerPerson={totalBillPerPerson}/>
            <ResetButton onChangeState={onChangeState} />
        </div>
    )
}

export default Output;