import style from './Amount.module.css'


function Amount(props) {
    return(
        <div className={style.amount}>
            <div>
                <p className={style.title}>Tip Amount</p>
                <p className={style.desc}>/ person</p>
            </div>
            <div className={style.output}>
                {`$${props.tipPerPerson.toFixed(2)}`}
            </div>
        </div>
    )
}

export default Amount;