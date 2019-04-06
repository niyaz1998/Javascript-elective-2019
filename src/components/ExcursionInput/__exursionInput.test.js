import React from 'react';
import {MyTextField} from './keyTextField';
import renderer from 'react-test-renderer'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});


import {shallow, mount, render} from 'enzyme';

describe('My input text field', () => {
    it('test component', () => {
        const funct = (key) => (value) => {
            console.log(key, value);
        };

        const shallowComponent = shallow(<MyTextField
            label={"label"}
            title={"title"}
            onChange={funct("label")}
            value={"value"}/>);
        expect(shallowComponent.debug()).toMatchSnapshot();

        const shallow1 = shallow(<MyTextField
            label={"label"}
            title={"title"}
            inputType={"number"}
            onChange={funct("label")}
            value={"value"}/>);
        expect(shallow1.debug()).toMatchSnapshot();
        // Test lifecycle method calls and all possible component states
        // console.log(shallowComponent.debug())
        // console.log(mountComponent.debug())

    });

    it('correct number text input', () => {
        const mockFn = jest.fn();
        const tree = shallow(
            <MyTextField
                label={"label"}
                title={"title"}
                inputType={"number"}
                onChange={mockFn}
                value={"value"}/>
        );
        tree.simulate('change', { target: { value: '123' } });
        tree.simulate('change', { target: { value: 'das' } });
        tree.simulate('change', { target: { value: '123.' } });
        tree.simulate('change', { target: { value: '123.231' } });
        tree.simulate('change', { target: { value: '' } });
        tree.simulate('change', { target: { value: '0' } });
        tree.simulate('change', { target: { value: '.0' } });
        tree.simulate('change', { target: { value: '.' } });
        tree.simulate('change', { target: { value: '0.' } });
        expect(mockFn).toBeCalledTimes(7);
    })
});
