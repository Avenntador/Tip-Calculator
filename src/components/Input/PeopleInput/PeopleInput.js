import style from './PeopleInput.module.css'


function PeopleInput(props) {

    function getValue(e) {
        props.onPeopleNumChange(e.target.value);
    }

    return(
        <div>
            <p className={style.header}>Number of People</p>
            <input onChange={getValue} type="number" className={style.peopleInput} />
        </div>
    )
}

export default PeopleInput;