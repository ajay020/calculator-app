import Display from "../display/Display";
import Keyboard from "../keyboard/Keyboard";
import styles from './Calculator.module.css';

const Calculator = () =>{
    return <div className={styles.Calculator}>
        <Display/>
        <Keyboard/>
    </div>
}

export default Calculator;