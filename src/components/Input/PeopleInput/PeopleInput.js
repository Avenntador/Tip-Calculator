import './PeopleInput.css'
import { useState } from 'react'
import person from '../../../assets/icon-person.svg'

function PeopleInput({ onChangeState, peopleNumInput}) {

    const [vis, setVis] = useState('hide');
    const [bord, setBord] = useState('');

    function validateInput(value) {
        if (value > 0) {
            setVis('hide');
            setBord('')
            onChangeState('People', value);
        } else {
            setVis('');
            setBord('errorBorder')
        }
    }

    return(
        <div>
            <p className='header'>Number of People <span className={`error ${vis}`}>Can't be zero!</span></p>
            <div className='inputContainer'>
                <img className='inputIcon' src={person} alt="" />
            <input value={peopleNumInput} onChange={(e) => {validateInput(e.target.value)} } type="number" className={`peopleInput ${bord}`}/>
            </div>
        </div>
    )
}

export default PeopleInput; 