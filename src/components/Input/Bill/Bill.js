import style from './Bill.module.css'

function Bill(props) {

    function getValue(e) {
        props.onBillChange(e.target.value);
    }

    return(
        <div>
            <p className={style.header}>Bill</p>
            <input onChange={getValue} type="number" className={style.billInput} />
        </div>
    )
}

export default Bill;