import React from 'react'
import renderer from 'react-test-renderer'
import {Provider} from 'react-redux'
import createStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {shallow} from "enzyme/build";
import "babel-polyfill";
import ExcursionsList from './excursionsList';
import {getExcursionLoadError, getExcursionsMap} from "../../store/excursions/reducer";
import {getUserToken} from "../../store/user/reducer";


describe('Excursion List Page', () => {
    it('test render component', () => {
        const mockStore = createStore([thunk]);
        const initialState = {
            user: {
                token: "dasda",
                error: "",
            },
            excursions: {
                excursionsMap: {},
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
                            return (<ExcursionsList
                                token={"dasdasda"}
                                error={"das"}
                                excursionsMap={{1: excursion1}}
                                fetchExcursion={() => {
                                }}
                            />)
                        }}/>
                    </Router>
                </Provider>,
                {createNodeMock: ({type}) => document.createElement(type)}
            );

        expect(container.toJSON()).toMatchSnapshot();
    })
});
