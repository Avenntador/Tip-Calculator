import style from './Bill.module.css'

function Bill() {
    return(
        <div>
            <p className={style.header}>Bill</p>
            <input className={style.billInput} type="text" />
        </div>
    )
}

export default Bill;