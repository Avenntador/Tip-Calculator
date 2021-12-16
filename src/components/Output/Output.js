import style from './Output.module.css'
import Amount from './Amount/Amount';
import Total from './Total/Total';
import ResetButton from './ResetButton/ResetButton';

function Output() {
    return(
        <div className={style.outputContainer}>
            <Amount />
            <Total />
            <ResetButton />
        </div>
    )
}

export default Output;