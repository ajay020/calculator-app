import styles from './Keyboard.module.css';

const Keyboard = () =>{
    return  (<div className={styles.gridContainer}>
        <p  id={styles.clear} className={styles.gridItem}>DEL</p>
        <p id="divide" className={styles.gridItem}>/</p>
        <p id='multiply' className={styles.gridItem}>X</p>

        <p id="seven" className={styles.gridItem}>7</p>
        <p id="eight" className={styles.gridItem}>8</p>
        <p id="nine" className={styles.gridItem}>9</p>
        <p id="subtract" className={styles.gridItem}>-</p>


        <p id='four' className={styles.gridItem}>4</p>
        <p id="five" className={styles.gridItem}>5</p>
        <p id="six" className={styles.gridItem}>6</p>
        <p  id="add"className={styles.gridItem}>+</p>

        <p id="one" className={styles.gridItem}>1</p>
        <p  id="two"className={styles.gridItem}>2</p>
        <p id="three" className={styles.gridItem}>3</p>

        <p  id={styles.zero}className={styles.gridItem}>0</p>
        <p id={styles.equals} className={styles.gridItem}>=</p>
        <p  id="decimal"className={styles.gridItem}>.</p>

    </div>);
}

export default Keyboard;