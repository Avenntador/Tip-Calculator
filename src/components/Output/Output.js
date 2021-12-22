import style from './Output.module.css'
import Amount from './Amount/Amount';
import Total from './Total/Total';
import ResetButton from './ResetButton/ResetButton';

function Output(props) {
    return(
        <div className={style.outputContainer}>
            <Amount tipPerPerson={props.tipPerPerson} />
            <Total totalBillPerPerson={props.totalBillPerPerson}/>
            <ResetButton />
        </div>
    )
}

export default Output;