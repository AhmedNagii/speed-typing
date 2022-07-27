import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [wordsCount, setWordsCount] = useState(0);
  const [remainingTime, setRemainingTime] = useState(5);
  const [running, setRunning] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);

  function handelChange(event) {
    setInput(event.target.value);
  }

  function countWords(myText) {

    const numOfwords = myText
      .trim()
      .split(" ")
      .filter((word) => word !== "").length;
    setWordsCount(numOfwords);
  }

  function restartGame (){
    setInput("")
    setWordsCount(0)
    setRemainingTime(5)
    
  }
 useEffect(() => {
  if(running && remainingTime > 0 ) {
    setTimeout(() => {
      setRemainingTime(time => time - 1)
    }, 1000)
} else{
  setRunning(false)
  countWords(input)
  
}
  
  },[remainingTime , running]);

  return (
    <div className="App">
      <h1>Hello world</h1>
      <textarea onChange={handelChange} />
      <h4>Remaining time: {remainingTime}</h4>
      <button onClick={() =>
       {setRunning(true)}   }>{hasEnded? "Restart" : "start"} </button>
      <h1>Word count: {wordsCount}</h1>
    </div>
  );
}

export default App;
