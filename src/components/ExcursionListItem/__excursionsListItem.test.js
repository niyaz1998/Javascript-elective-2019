import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
import {shallow, mount, render} from 'enzyme';

import ExcursionListItem from './excursionListItem';


describe('Excursion List Item', () => {
    it('test component', () => {
        const shallowComponent = shallow(<ExcursionListItem/>);
        expect(shallowComponent.debug()).toMatchSnapshot();
    });
});