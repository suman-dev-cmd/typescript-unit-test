import React from "react";
import Input from "../Input";
import { findByTestAttr } from '../../../test/testUtills';
import {shallow} from 'enzyme';
const setup = (success=false,secretWord='party')=>{
    return shallow(<Input success={success} secretWord={secretWord}/>);
}
const mockSetCurrentGuess = jest.fn();
jest.mock('react',()=>({
    ...jest.requireActual('react'),
    useState:(initialState:string)=>[initialState,mockSetCurrentGuess]
}));
describe('render',()=>{

    describe('success is true',()=>{
        let warpper:any;
        beforeEach(()=>{
            warpper=setup(true);
        })
        test('renders without error',()=>{
            const inputComponent = findByTestAttr(warpper,'input-component');
            expect(inputComponent.length).toBe(1);
        });
        test('input box does not show',()=>{
            const inputBox = findByTestAttr(warpper,'input-box');
            expect(inputBox.exists()).toBe(false);
        });
        test('submit button does not show',()=>{
            const submitButton = findByTestAttr(warpper,'submit-button');
            expect(submitButton.exists()).toBe(false);
        });
    });
    describe('success is false',()=>{
        let warpper:any;
        beforeEach(()=>{
            warpper=setup(false);
        })
        test('renders without error',()=>{
            const inputComponent = findByTestAttr(warpper,'input-component');
            expect(inputComponent.length).toBe(1);
        });
        test('input box  show',()=>{
            const inputBox = findByTestAttr(warpper,'input-box');
            expect(inputBox.exists()).toBe(true);
        });
        test('submit button  show',()=>{
            const submitButton = findByTestAttr(warpper,'submit-button');
            expect(submitButton.exists()).toBe(true);
        });
    });
});
describe('state control input filed',()=>{
   
    test('state updates with value of inputs box upon change',()=>{
        const wrapper = setup();
        const inputBox = findByTestAttr(wrapper,'input-box');
        const mockEvent ={target:{value:'train'}};
        inputBox.simulate("change",mockEvent);
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    });
    test('field is cleared upon submit button click',()=>{
        const wrapper = setup();
        const submitbutton = findByTestAttr(wrapper,'submit-button');
        submitbutton.simulate("click",{preventDefault(){}});
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
    });
});