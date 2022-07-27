import "./App.css";
import React, { useEffect, useState, useRef } from "react";

function App() {
  const STARTING_TIME = 10;

  const textAreaRef = useRef(null);
  const [input, setInput] = useState("");
  const [wordsCount, setWordsCount] = useState(0);
  const [remainingTime, setRemainingTime] = useState(STARTING_TIME);
  const [running, setRunning] = useState(false);

  function handelChange(event) {
    setInput(event.target.value);
  }

  function countWords(myText) {
    const numOfwords = myText
      .trim()
      .split(" ")
      .filter((word) => word !== "").length;
    return numOfwords;
  }

  function startGame() {
    setRunning(true);
    setRemainingTime(STARTING_TIME);
    setInput("");
    textAreaRef.current.disabled = false
    textAreaRef.current.focus()
  }
  function endGame() {
    setRunning(false);
    setWordsCount(countWords(input));
  }

  useEffect(() => {
    if (running && remainingTime > 0) {
      textAreaRef.current.focus();
      setTimeout(() => {
        setRemainingTime((time) => time - 1);
      }, 1000);
    }  else if(remainingTime === 0) {
      endGame();
    }
  }, [remainingTime, running]);

  return (
    <div className="App">
      <h1>How fast do you type</h1>
      <textarea
       ref={textAreaRef}
        disabled={!running}
         onChange={handelChange} 
         value={input}
         />
      <h4>Remaining time: {remainingTime}</h4>
      <button disabled={running} onClick={startGame}>
        {remainingTime === 0 ? "Restart" : "start"}{" "}
      </button>
      <h1>Word count: {wordsCount}</h1>
    </div>
  );
}

export default App;
