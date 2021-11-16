export function getLatterMathchCount(guessedWord:any,secretWord:string){
    const secretLetters = secretWord.split('');
    const guessedLetterSet = new Set(guessedWord);
    return secretLetters.filter(latter=>guessedLetterSet.has(latter)).length;
}