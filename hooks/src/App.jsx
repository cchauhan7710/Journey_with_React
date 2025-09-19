import "./App.css";
import { useState } from "react";

function App() {
  // let Counter  = 10
  let [Counter, setCounter] = useState(0);

  const addValue = () => {
    let RF = Counter+1
    if(RF<=0) {
      setCounter(RF)
    }
    if (RF<=20) {
      setCounter(RF)
      
    } 
    
  };

  const removeValue = ()=>
  {
    let RF = Counter-1
    if(RF>=0) setCounter(RF)
    
  }
  return (
    <>
      <h1> Rahul Chauhan</h1>
      <h2>Counter value : {Counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Decrease Value</button>
    </>
  );
}

export default App;
