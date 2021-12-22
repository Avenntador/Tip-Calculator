import style from './TipSelect.module.css'
import Tip from './Tip/Tip';
import CustomInput from '../CustomInput/CustomInput';

const tips = [5, 10, 15, 25, 50];


function TipSelect(props) {
    return(
        <div>
            <p className={style.header}>Select Tip %</p>
            <div className={style.tipsContainer}>
                {tips.map((tip,i) => {
                    return(
                        <Tip 
                        onTipChange={props.onTipChange} 
                        key={i} 
                        amount={tip}
                        />
                    )
                })}
                <CustomInput />
            </div>
        </div>
        
    );
}

export default TipSelect;