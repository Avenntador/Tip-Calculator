import style from './TipSelect.module.css'
import Tip from './Tip/Tip';
import CustomInput from '../CustomInput/CustomInput';

const tips = [5, 10, 15, 25, 50];

function TipSelect({onChangeState}) {
    return(
        <div>
            <p className={style.header}>Select Tip %</p>
            <div className={style.tipsContainer}>
                {tips.map((tip,i) => {
                    return(
                        <Tip 
                        onChangeState={onChangeState} 
                        key={i} 
                        amount={tip}
                        />
                    )
                })}
                <CustomInput onChangeState={onChangeState}/>
            </div>
        </div>      
    );
}

export default TipSelect;