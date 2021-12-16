import style from './Total.module.css'


function Total() {
    return(
        <div className={style.total}>
            <div>
                <p className={style.title}>Total</p>
                <p className={style.desc}>/ person</p>
            </div>
            <div className={style.output}>
                $0.00
            </div>
        </div>
    )
}

export default Total;