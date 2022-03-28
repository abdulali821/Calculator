import { useState } from "react";
import image from "./img/backImg.jpg";

function App() {
  const [calc, setCalc] = useState("");
  // const [result, setResult] = useState("");

  // const ops = ['/','*','-','+','.'];

  const updateCal = value => {
    setCalc(calc+value);
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
         {0? <span>(0) </span> : ""} {calc || "0"}
        </div>
          <div className="operators">
            <button onClick={()=>{updateCal("/")}}>/</button>
            <button onClick={()=>{updateCal("+")}}>+</button>
            <button onClick={()=>{updateCal("-")}}>-</button>
            <button onClick={()=>{updateCal("*")}}>*</button>
            <button >DEL</button>
          </div>
          <div className="digit">
            {numbers()}
            <button onClick={()=>{updateCal("0")}}>0</button>
            <button onClick={()=>{updateCal(".")}}>.</button>
            <button>=</button>
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
