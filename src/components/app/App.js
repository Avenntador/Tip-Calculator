import style from './App.module.css'
import logo from '../../assets/logo.svg'
import Input from '../Input/Input';
import Output from '../Output/Output';

function App() {
    return(
        <>
        <img className={style.logo} src={logo} alt="React Logo" />
        <div className={style.container}>
            <Input />
            <Output/>
        </div>
        </>
        
    );
}

export default App;