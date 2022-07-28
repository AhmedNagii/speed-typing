import "./App.css";
import React from "react";
import useWordGame from "./hooks/useWordGame";

function App() {
  const { textAreaRef, input, wordsCount, remainingTime,
     running, startGame , handelChange} =
    useWordGame(15);

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
