import style from './Tip.module.css'

function Tip(props) {
    return(
        <div className={style.tipItem}>
            <p>{props.amount}%</p>
        </div>
    );
}

export default Tip;