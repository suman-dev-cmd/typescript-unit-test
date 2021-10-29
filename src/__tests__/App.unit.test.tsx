import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
const setup =()=> shallow(<App />);
const findByTestArr = (wrapper:any,val:any) => wrapper.find(`[data-test='${val}']`);
describe("<App />",()=>{
  test('renders without error',()=>{
    const wrapper = setup();
    const appComponent = findByTestArr(wrapper,"app-component");
    expect(appComponent.length).toBe(1);
  });
  test('renders button',()=>{
    const wrapper = setup();
    const appComponent = findByTestArr(wrapper,"increment-button");
    expect(appComponent.length).toBe(1);
  });
  test('renders counter display',()=>{
    const wrapper = setup();
    const appComponent = findByTestArr(wrapper,"counter-display");
    expect(appComponent.length).toBe(1);
  });
  test('counter starts at 0',()=>{
    // const wrapper = setup();
    // const appComponent = findByTestArr(wrapper,"app-component");
    // expect(appComponent.length).toBe(1);
  });
})
