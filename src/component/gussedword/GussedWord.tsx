import React from 'react'
interface GWProp{
    guessedWord:string,
    letterMatchCount:number
}
interface GWAProp{
    guessedWords:GWProp[]
}
const GussedWord = (props:GWAProp) => {
    let content:any
    if(props.guessedWords.length === 0){
        content =(
            <span data-test="guess-instructions">Try to guess the secret word!</span>
        );
    }
    return (
        <div data-test="guessed-component">
            {content}
        </div>
    )
}

export default GussedWord;
