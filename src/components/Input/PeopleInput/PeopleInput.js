import style from './PeopleInput.module.css'


function PeopleInput() {
    return(
        <div>
            <p className={style.header}>Number of People</p>
            <input className={style.peopleInput} type="text" />
        </div>
    )
}

export default PeopleInput;