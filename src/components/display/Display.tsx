import styles from './Display.module.css';

const Display = () =>{
    return <div className={styles.display}>
            <p className={styles.resultText}>3+3</p>
            <p className={styles.inputText}>0</p>
    </div>
}

export default Display;