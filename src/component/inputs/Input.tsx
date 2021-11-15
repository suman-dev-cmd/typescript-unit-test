import React, { useState } from "react";
interface Iprops {
  secretWord: string;
  success: boolean;
}
const Input = ({ secretWord, success}: Iprops) => {
  const [currentGuess, setCurrentGuess] = useState("");
  if (success) {
    return <div data-test="input-component"></div>;
  }
  return (
    <div data-test="input-component">
      <form>
        <input
          data-test="input-box"
          type="text"
          placeholder="Enter Guess"
          value={currentGuess}
          onChange={(even) => setCurrentGuess(even.target.value)}
        />
        <button
          data-test="submit-button"
          onClick={(evnt) => {
            evnt.preventDefault();
            setCurrentGuess("");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Input;
