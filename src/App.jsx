import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


export default function App() {
  const [total , setTotal] = useState();// setting 0 initially is not a problem
  const [bill,setBill] = useState();
  const [tip,setTip] = useState();
  function calculate(){
    let x = bill + (bill * tip/100);
    setTotal( (bill + (bill * tip/100)).toFixed(2) );

  }
  return (
    <>
      <span id='intro'>Tip Calculator</span>
      <div id='container'>
      <label htmlFor="billAmount">Bill Amount</label>
      <input type="number" name="billAmount" id="billAmount"  onChange={(e)=>setBill(parseInt(e.target.value))}/>
      <label htmlFor="tipPercent">Tip Percent</label>
      <input type="number" name="billAmount" id="tipPercent"  onChange={(e)=>setTip(parseInt(e.target.value))}/>
      <button className="btn" id="calculateAmount"  onClick={calculate}> Calculate Amount</button>
      <span className="" id="totalAmount" >Total Amount:{total}</span>
        </div>
    </>
  );
}
