import style from './ResetButton.module.css'


function ResetButton() {
    return(
        <div className={style.resetContainer}>
            <button className={style.resetBtn}>RESET</button>
        </div>
    )
}

export default ResetButton;