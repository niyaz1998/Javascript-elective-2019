import React from 'react';
import "babel-polyfill";
import Enzyme from 'enzyme';
import LoginForm from './loginForm';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
import {shallow, mount, render} from 'enzyme';


describe('Login Form Page', () => {
    it('test render component', () => {

        const shallowComponent = shallow(<LoginForm/>);
        expect(shallowComponent.debug()).toMatchSnapshot();
    })
});
