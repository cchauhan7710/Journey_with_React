
import { useState } from 'react'
import './App.css'

function App() {

const [Counter , setCounter]=useState(0);

// const addValue =(previousCounter)=>
const addValue =()=>
{
  setCounter(Counter+ 1)
  // setCounter(previousCounter =>previousCounter + 1)
  // setCounter(previousCounter =>previousCounter + 1)
  // setCounter(previousCounter =>previousCounter + 1)
  // setCounter(previousCounter =>previousCounter + 1)
  // setCounter(previousCounter =>previousCounter + 1)
  // setCounter(Counter + 1)
  // setCounter(Counter + 1)
  // setCounter(Counter + 1)
  // setCounter(Counter + 1)
  
    //  setCounter(RF)
  // if(RF<=10)
  // {
    
  //    setCounter(RF)
  // }

}
const removeValue = ()=>
{
  let RF = Counter -1
  if(RF>=0)
  setCounter(RF)
}

 
  return (
    <>
     
     <h1>Rahul Chauhan</h1>

     <h2>Counter  value is :  {Counter}</h2>

     <button onClick={addValue}>increase Count </button>
     <button onClick={removeValue}>Decrease Count</button>
    </>
  )
}

export default App
