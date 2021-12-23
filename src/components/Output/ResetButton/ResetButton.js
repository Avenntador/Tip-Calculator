import style from './ResetButton.module.css'


function ResetButton({ onChangeState }) {
    return(
        <div className={style.resetContainer}>
            <button onClick={() => onChangeState('Reset')} className={style.resetBtn}>RESET</button>
        </div>
    )
}

export default ResetButton;