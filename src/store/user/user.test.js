import moxios from 'moxios';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from "redux-thunk";
import {fetchTokenFromServer} from "./actions";
import "babel-polyfill";
import * as types from "./actionTypes";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('user actions test', () => {


    beforeEach(function () {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('test login function', (done) => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {"token": "this_is_token", "status": 0, "errorMessage": ""},
            });
        });

        const expectedAction = { type: types.TOKEN_FETCHED,
            token: 'this_is_token',
            status: 0,
            errorMessage: '' };

        const store = mockStore({});

        //store.dispatch(fetchTokenFromServer('login', 'password'));
        store.dispatch(fetchTokenFromServer('login', 'password')).then(() => {
            expect(store.getActions()).toEqual([expectedAction]);
            done();
        });
    })
});