import style from './Bill.module.css'
import dollar from '../../../assets/icon-dollar.svg';

function Bill({ onChangeState, billInput }) {
    return(
        <div>
            <p className={style.header}>Bill</p>
            <div className={style.inputContainer}>
                <img className={style.inputIcon} src={dollar} alt="" />
                <input value={billInput} onChange={(e) => {onChangeState('Bill', e.target.value)}} type="number" className={style.billInput} />
            </div>
        </div>
    )
}

export default Bill;