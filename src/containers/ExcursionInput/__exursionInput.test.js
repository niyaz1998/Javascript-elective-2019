import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
import {shallow, mount, render} from 'enzyme';


import {ExtendableList} from "./extendableList";
import {ExcursionTypeSelector} from "./excursionTypeSelector";
import {MyTextField} from "./keyTextField";
import {ExcursionTimePicker} from "./excursionTimePicker";
import {ExcursionServicesSelector} from "./excursionServisesSelector";
import ExcursionInput from "./excursionInput";

describe('Excursion Input', () => {
    it('test component', () => {
        const someFunction = (key) => (value) => {
            console.log(key, value);
        };

        const shallowComponent = shallow(<MyTextField
            label={"label"}
            title={"title"}
            onChange={someFunction("label")}
            value={"value"}/>);
        expect(shallowComponent.debug()).toMatchSnapshot();

        const shallow1 = shallow(<MyTextField
            label={"label"}
            title={"title"}
            inputType={"number"}
            onChange={someFunction("label")}
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
        expect(tree.debug()).toMatchSnapshot();
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
    });

    it('correct extendable list input', () => {
        const mockFn = jest.fn();
        const tree = mount(
            <ExtendableList
                title="Фотографии"
                value={['a', 'b', 'c']}
                handleValueChange={mockFn}/>
        );
        expect(tree.debug()).toMatchSnapshot();
        const input = tree.find('input');
        const button = tree.find('button');
        input.simulate('change', { target: { value: 'dasda' } });
        button.simulate('click');
        input.simulate('change', { target: { value: '' } });
        button.simulate('click');
        expect(mockFn).toBeCalledTimes(1);
    });

    it('excursions types selector', () => {
        const mockFn = jest.fn();
        const tree = shallow(
            <ExcursionTypeSelector
                handleValueChange={mockFn}/>
        );
        expect(tree.debug()).toMatchSnapshot();
        const button = tree.find({children: "Обзорная"});
        button.simulate('click');
        button.simulate('click');
        expect(mockFn).toBeCalledTimes(2);
    });

    it('excursion time picker', () => {
        const tree = mount(
            <ExcursionTimePicker
                onChange={() => {}}
                title="Начало"/>
        );
        expect(tree.debug()).toMatchSnapshot();
    });

    it('excursion services selector', () => {
        const mockFn = jest.fn();
        const tree = mount(
            <ExcursionServicesSelector
                onChange={mockFn}
                services={[]}/>
        );
        expect(tree.debug()).toMatchSnapshot();
        const button1 = tree.findWhere(n => n.key() === 'HUMN').find('input');
        button1.simulate('change');
        button1.simulate('change');
        const button2 = tree.findWhere(n => n.key() === 'FORK').find('input');
        button2.simulate('change');
        expect(mockFn).toBeCalledTimes(3);
    });

    it('excursion whole input', () => {
        const tree = mount(
            <ExcursionInput/>
        );
        expect(tree.debug()).toMatchSnapshot();
    });
});
