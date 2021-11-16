import React from "react";
import {mount,shallow} from 'enzyme';
import App from "../App";
import { findByTestAttr } from "../test/testUtills";

const setup =(state={})=>{
    const wrapper = mount(<App />);
    const inputBox = findByTestAttr(wrapper,'input-box');
    inputBox.simulate('change',{target:{value:'train'}});
    const submitButton = findByTestAttr(wrapper,'submit-button');
    submitButton.simulate('click',{preventDefault(){}});
    return wrapper;
}
describe('no words guessed',()=>{
    let wrapper:any;
    beforeEach(()=>{
         wrapper=setup({
            secretWord:'party',
            success:false,
            guessedWords:[]
        })
    });
    // const wrapper=setup({
    //     secretWord:'party',
    //     success:false,
    //     guessedWords:[]
    // })
    test('creates GuessedWords table with one row',()=>{
        const guessedWordRows = findByTestAttr(wrapper,'guessed-word');
        expect(guessedWordRows).toHaveLength(1);
    })
})
describe.skip('some words guessed',()=>{
    let wrapper:any;
    beforeEach(()=>{
        wrapper=setup({
            secretWord:'party',
            success:false,
            guessedWords:[{guessedWord:'agile',letterMatchCount:1}]
        })
    });
    test('adds GuessedWords table ',()=>{
        const guessedWordRows = findByTestAttr(wrapper,'guessed-word');
        expect(guessedWordRows).toHaveLength(2);
    })
})
describe.skip('guess secret word', () => {
    let wrapper:any;
    beforeEach(() => {
        wrapper = setup({
          secretWord: 'party',
          success: false,
          guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }],
        });
  
      
      const inputBox = findByTestAttr(wrapper, 'input-box');
      const mockEvent = { target: { value: 'party' } };
      inputBox.simulate('change', mockEvent);
  
        
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        submitButton.simulate('click', { preventDefault() {} });
    });
    test('adds row to guessedWords table', () => {
        const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordNodes).toHaveLength(3);
    });
    test('displays congrats component', () => {
        const congrats = findByTestAttr(wrapper, 'component-congrats');
        expect(congrats.text().length).toBeGreaterThan(0);
    });
    test('does not display input component contents', () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(false);
  
      const submitButton = findByTestAttr(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(false);
    });
  });