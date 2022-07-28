import {useState, useEffect, useRef} from "react"

function useWordGame (startingTime = 10){
 

    const textAreaRef = useRef(null);
    const [input, setInput] = useState("");
    const [wordsCount, setWordsCount] = useState(0);
    const [remainingTime, setRemainingTime] = useState(startingTime);
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
      setRemainingTime(startingTime);
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
  
    
    return {textAreaRef,input,wordsCount ,remainingTime,
        running, startGame ,handelChange}
}

export default useWordGame