import { useState } from "react";
import image from "./img/backImg.jpg";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ['/','*','-','+','.'];

  const updateCal = value => {
    if((ops.includes(value) && calc=== '') || (ops.includes(value) && ops.includes(calc.slice(-1))))
    {
      return;
    }
    setCalc(calc+value);
    if(!ops.includes(value)){
      setResult(eval(calc+value).toString());
    }
  }
  const calculate = () => {
    setCalc(eval(calc).toString());
  }
  const deleteLast = () =>{
    if(calc===''){
      return;
    }
    const value = calc.slice(0 ,-1);
    setCalc(value);
  }
  const numbers=()=>{
    const no=[];
    for (let i = 1; i < 10; i++) {
      no.push(
        <button onClick={()=>{updateCal(i.toString())}} key={i}>{i}</button>
      );
    }
    return no;
  }
  return (
    <div 
    style={{ backgroundImage: `url(${image})` ,backgroundRepeat: 'no-repeat' , backgroundSize:'cover'}}
    className="App">
      <div className="title">
        <h1>
          CALCULATOR
        </h1>
        </div>
      <div className="calculator">
        <div className="display">
         {result? <span>({result}) </span> : ""} {calc || "0"}
        </div>
          <div className="operators">
            <button onClick={()=>{updateCal("/")}}>/</button>
            <button onClick={()=>{updateCal("+")}}>+</button>
            <button onClick={()=>{updateCal("-")}}>-</button>
            <button onClick={()=>{updateCal("*")}}>*</button>
            <button onClick={deleteLast}>DEL</button>
          </div>
          <div className="digit">
            {numbers()}
            <button onClick={()=>{updateCal("0")}}>0</button>
            <button onClick={()=>{updateCal(".")}}>.</button>
            <button onClick={calculate}>=</button>
          </div>
      </div>
      <div className="landing">
        <h2>
          Made by Me❤️
        </h2>
        </div>
    </div>
  );
}

export default App;
