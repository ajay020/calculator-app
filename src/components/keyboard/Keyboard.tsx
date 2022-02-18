import styles from './Keyboard.module.css';

type KeyboardProps = {
    handleClick : (item: string) => void 
}

const Keyboard = ({handleClick}:KeyboardProps) =>{
    
    return  (<div  className={styles.gridContainer}>
        <p 
          onClick={()=>handleClick("DEL")}
          id={styles.clear}
          className={styles.gridItem}>DEL</p>
        <p
        onClick={()=>handleClick("/")}
         id="divide" className={styles.gridItem}>/</p>
        <p 
        onClick={()=>handleClick("*")}
        id='multiply' className={styles.gridItem}>*</p>

        <p
         onClick={()=>handleClick("7")}
         id="seven" 
         className={styles.gridItem}>7</p>

        <p
         onClick={()=>handleClick("8")}
         id="eight"
         className={styles.gridItem}>8</p>

        <p 
         onClick={()=>handleClick("9")}
         id="nine"
         className={styles.gridItem}>9</p>
        <p
         onClick={()=>handleClick("-")}
         id="subtract"
         className={styles.gridItem}>-</p>

        <p
         onClick={()=>handleClick("4")}
         id='four'
         className={styles.gridItem}>4</p>

        <p
         onClick={()=>handleClick("5")}
         id="five"
         className={styles.gridItem}>5</p>

        <p 
         onClick={()=>handleClick("6")}
         id="six"
         className={styles.gridItem}>6</p>

        <p 
        onClick={()=>handleClick("+")}
         id="add"
        className={styles.gridItem}>+</p>

        <p 
         onClick={()=>handleClick("1")}
         id="one"
         className={styles.gridItem}>1</p>

        <p
         onClick={()=>handleClick("2")}
         id="two"
         className={styles.gridItem}>2</p>

        <p 
         onClick={()=>handleClick("3")}
         id="three" 
         className={styles.gridItem}>3</p>

        <p 
         onClick={()=>handleClick("0")}
         id={styles.zero}
         className={styles.gridItem}>0</p>

        <p 
        onClick={()=>handleClick("=")}
        id={styles.equals} 
        className={styles.gridItem}>=</p>

        <p 
         onClick={()=>handleClick(".")}
         id="decimal"
         className={styles.gridItem}>.</p>

    </div>);
}

export default Keyboard;