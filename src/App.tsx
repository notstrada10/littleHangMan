import { useState } from "react";
import words from "./words.json";
import { HangManDrawing } from "./HangManDrawing";
import { HangManWord } from "./HangManWord";
import { Keyboard } from "./Keyboard";

function App() {
  const [workToGuess, setWorkToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const incorrectLetters = guessedLetters.filter(letter => !workToGuess.includes(letter))

  return (
  <div style={{
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    margin: "0 auto",
    alignItems: "center",
  }}>
    <div style={{ fontSize: "2rem"}}>
      Lose
      Win
    </div>
    <HangManDrawing numberOfGuesses={incorrectLetters.length} />
    <HangManWord />
    <div style={{ alignSelf: "stretch" }}>
    <Keyboard />
    </div>
  </div>
  )
}

export default App
