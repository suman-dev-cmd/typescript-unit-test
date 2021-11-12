import React from "react";
import { shallow } from "enzyme";
import GussedWord from "../GussedWord";
import { findByTestAttr } from '../../../test/testUtills';
const defaultProps = {
    guessedWords:[{guessedWord:'train',letterMatchCount:3}]
}
const setup = (props={})=>{
    const setupProps = {...defaultProps,...props};
    return shallow(<GussedWord {...setupProps}/>)
}

describe('if there are no words guessed',()=>{
    let warrper:any
    beforeEach(()=>{
        warrper=setup({guessedWords:[]});
    })
    test('renders without error',()=>{
        const component = findByTestAttr(warrper,'guessed-component');
        expect(component.length).toBe(1);
    });
    test('renders instructions to guess a word',()=>{
        const intructions = findByTestAttr(warrper,'guess-instructions');
        expect(intructions.text().length).not.toBe(0);
    })
});

describe('if there are words guessed',()=>{
    const guessedWords =[
        {guessedWord:'train',letterMatchCount:3},
        {guessedWord:'agile',letterMatchCount:1},
        {guessedWord:'party',letterMatchCount:5},
    ]
    let warrper:any
    beforeEach(()=>{
        warrper=setup({guessedWords});
    })
    test('renders without error',()=>{
        const component = findByTestAttr(warrper,'guessed-component');
        expect(component.length).toBe(1);
    });
    test('renders "guessed words" section',()=>{
        const intructions = findByTestAttr(warrper,'guess-instructions');
        expect(intructions.text().length).not.toBe(0);
    });
    test('correct number of guessed word',()=>{

    })
});
