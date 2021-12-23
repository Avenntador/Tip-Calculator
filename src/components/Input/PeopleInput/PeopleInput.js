import './PeopleInput.css'
import { useState } from 'react'

function PeopleInput({ onChangeState }) {

    const [vis, setVis] = useState('hide');

    function validateInput(value) {
        if (value > 0) {
            setVis('hide');
            onChangeState('People', value);
        } else {
            setVis('');
        }
    }

    return(
        <div>
            <p className='header'>Number of People <span className={`error ${vis}`}>Can't be zero!</span></p>
            <input onChange={(e) => {validateInput(e.target.value)} } type="number" className="peopleInput" />
        </div>
    )
}

export default PeopleInput;