import React from "react";
import {shallow} from "enzyme";
import Congrates from "../Congrates";
import { findByTestAttr } from "../../../test/testUtills";
const setup = (props={})=>{
    return shallow(<Congrates {...props}/>);
}
test('renders withour error',()=>{
    const wrapper = setup();
    const component = findByTestAttr(wrapper,'component-congrats');
    expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false',()=>{
    const wrapper = setup({success:false});
    const component = findByTestAttr(wrapper,'component-congrats');
    expect(component.text()).toBe('');
});

test('renders non-empty congrates message when `success` prop is true',()=>{
    const wrapper = setup({success:true});
    const message = findByTestAttr(wrapper,'message-congrats');
    expect(message.text().length).not.toBe(0);
});