import style from './Total.module.css'


function Total(props) {
    return(
        <div className={style.total}>
            <div>
                <p className={style.title}>Total</p>
                <p className={style.desc}>/ person</p>
            </div>
            <div className={style.output}>
                {`$${props.totalBillPerPerson.toFixed(2)}`}
            </div>
        </div>
    )
}

export default Total;