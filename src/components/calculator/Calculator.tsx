import { useState } from "react";
import Display from "../display/Display";
import Keyboard from "../keyboard/Keyboard";
import styles from './Calculator.module.css';

const Calculator = () =>{
    const [result, setResult] = useState("");
    const [input, setInput]  = useState("");
    const [canAddDecimalPoint, setCatAddDecimalPoin] = useState(true);
    const evaluteExpression = (expression:string)=>{
        let res = eval(expression);
        res = (+res % 1) === 0 ? res : res.toFixed(4);
        setResult(result + " = "+ res);
    }

    const handleClick = (item: string) =>{
        if(item === "="){
            evaluteExpression(result)
        }else if(item === "DEL")   {
            setInput("");
            setResult("");
        }else if(item === "."){
            setInput(prvInput => {
                if(prvInput === ''){
                    setResult(prvResult => prvResult + "0.");
                    setCatAddDecimalPoin(false)
                    return "0.";
                }else{
                    setResult(prvResult =>{
                       if(canAddDecimalPoint){
                          setCatAddDecimalPoin(false)
                           return prvResult + "."
                       } 
                       return prvResult;
                    } );

                }
                return  item;
            });
        }else if(item === "/" || item === "*" || item === "+" || item === "-"){
            if( item === "+" || item === "-"){
                setInput(item);
                if("+-".indexOf(result[result.length-1]) == -1 ){
                    setResult(preRes => preRes + item);
                    setCatAddDecimalPoin(true);
                }
            }else{
                setInput(item);
                if( result && !isNaN(+result[result.length-1] )){
                    setResult(preRes => preRes + item);
                    setCatAddDecimalPoin(true);
                }
            }
        }else {
            setInput(item);
            setResult(prvResult => prvResult + item);
        }
    }

    return <div className={styles.Calculator}>
        <Display 
        result = {result} 
        input={input}/>
        <Keyboard handleClick = {handleClick}/>
    </div>
}

export default Calculator;