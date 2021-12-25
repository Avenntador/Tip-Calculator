import style from './ResetButton.module.css'


function ResetButton({ onChangeState, setActive }) {

    function changeHandler() {
        onChangeState('Reset');
        setActive();
    }

    return(
        <div className={style.resetContainer}>
            <button onClick={changeHandler} className={style.resetBtn}>RESET</button>
        </div>
    )
}

export default ResetButton;