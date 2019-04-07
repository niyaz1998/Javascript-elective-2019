import React from 'react'
import renderer from 'react-test-renderer'
import {Provider} from 'react-redux'
import createStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {shallow} from "enzyme/build";
import ExcursionListItem from "../../components/ExcursionListItem/excursionListItem";
import {ExcursionEdit} from "./excursionEditPage";


describe('Excursion Edit Page', () => {
    it('test render component', () => {
        const mockStore = createStore([thunk]);
        const initialState = {
            excursions: {
                excursionsMap: {
                    1: {}
                }
            }

        };
        const store = mockStore(initialState);

        const excursion1 = {
            id: undefined,
            region: undefined,
            title: undefined,
            price: undefined,
            start_time: undefined,
            duration: undefined,
            services: [],
            type: undefined,
            images: [],
            description: undefined,
            starting_point: undefined,
            available_dates: [],
            price_adult: undefined,
            price_child: undefined
        };

        const container = renderer
            .create(
                <Provider store={store}>
                    <Router>
                        <Route component={() => {
                            return (<ExcursionEdit
                                match={{params: {id: 1}}}
                                excursionsMap={{1: excursion1}}
                            />)
                        }}/>
                    </Router>
                </Provider>,
                {createNodeMock: ({type}) => document.createElement(type)}
            );

        expect(container.toJSON()).toMatchSnapshot();
    })
});
