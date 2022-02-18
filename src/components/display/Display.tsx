import styles from './Display.module.css';

type DisplayProps = {
    result: string 
    input: string 
}

const Display = ({result, input} : DisplayProps) =>{
    return (<div className={styles.display}>
            <p className={styles.resultText}>{result}</p>
            <p className={styles.inputText}>
                {input ? input : 0}
            </p>
    </div>);
}

export default Display;