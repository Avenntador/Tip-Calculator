import style from './Bill.module.css'

function Bill({ onChangeState }) {
    return(
        <div>
            <p className={style.header}>Bill</p>
            <input onChange={(e) => {onChangeState('Bill', e.target.value)}} type="number" className={style.billInput} />
        </div>
    )
}

export default Bill;