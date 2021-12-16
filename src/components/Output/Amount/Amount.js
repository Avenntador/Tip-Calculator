import style from './Amount.module.css'


function Amount() {
    return(
        <div className={style.amount}>
            <div>
                <p className={style.title}>Tip Amount</p>
                <p className={style.desc}>/ person</p>
            </div>
            <div className={style.output}>
                $0.00
            </div>
        </div>
    )
}

export default Amount;