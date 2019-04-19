import moxios from 'moxios';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from "redux-thunk";
import {fetchTokenFromServer} from "./actions";
import "babel-polyfill";
import {applyMiddleware, combineReducers} from "redux";
import * as reducers from '../reducers';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('CharactersList', () => {


    beforeEach(function () {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });



    it('tests moxios', async (done)  => {

        let onFulfilled = jest.fn();

        moxios.stubRequest('/say/hello', {
            status: 200,
            responseText: 'hello'
        });

        await axios.get('/say/hello');

        moxios.wait(function () {
            console.log('Kekeke');
            done()
        })
    });

    it('test render empty component', async (done) => {
        moxios.stubRequest('/admin/token', {
            status: 200,
            response: {
                "token": "this_is_token", "status": 200, "errorMessage": ""
            }
        });

        const store = mockStore({});

        //store.dispatch(fetchTokenFromServer('login', 'password'));

        return store.dispatch(fetchTokenFromServer('login', 'password'))
            .then(() => {
                console.log(store.getActions());
            });
    })
});