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
    const wrapper = setup();
    const appComponent = findByTestArr(wrapper,"count").text();
    expect(appComponent).toBe("0");
  });
  test('clicking on button increments counter display',()=>{
    const wrapper = setup();
     //find the button
    const button = findByTestArr(wrapper,"increment-button");
     //click the button
    button.simulate('click');
     //find the display and test that the number has been incremented
     const appComponent = findByTestArr(wrapper,"count").text();
     expect(appComponent).toBe("1");
  })
})
