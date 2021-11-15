import React from 'react'
import {GWAProp} from '../../App';
const GussedWord = (props:GWAProp) => {
    let content:any
    if(props.guessedWords.length === 0){
        content =(
            <span data-test="guess-instructions">Try to guess the secret word!</span>
        );
    }else{
        const guessedWords = props.guessedWords.map((obj,i)=>(
            <tr data-test="guessed-word" key={i}>
                <td>{obj.guessedWord}</td>
                <td>{obj.letterMatchCount}</td>
            </tr>
        ))
        content =(
            <div data-test="guessed-words">
                <h3>Guessed Word</h3>
                <table>
                    <thead>
                        <tr>
                            <th>GuessWords</th>
                            <th>Latter Matchcount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {guessedWords}
                    </tbody>
                </table>
            </div>
        );
    }
    return (
        <div data-test="guessed-component">
            {content}
        </div>
    )
}

export default GussedWord;
