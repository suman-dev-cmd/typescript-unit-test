import { getLatterMathchCount } from "..";

describe('getLatterMatchCount',()=>{
    const secretWord = 'party'
    test('returns correct count when there are no matching letters',()=>{
        const latterMatchCount = getLatterMathchCount('bones',secretWord);
        expect(latterMatchCount).toBe(0);
    });

    test('returns correct count when there are three matching letters',()=>{
        const latterMatchCount = getLatterMathchCount('train',secretWord);
        expect(latterMatchCount).toBe(3);
    });

    test('returns correct count when there are duplicate letters in the guess',()=>{
        const latterMatchCount = getLatterMathchCount('parka',secretWord);
        expect(latterMatchCount).toBe(3);
    });
})