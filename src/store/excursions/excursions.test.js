import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from "redux-thunk";
import {fetchExcursion} from "./actions";
import "babel-polyfill";
import * as types from "./actionTypes";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('excursions actions test', () => {

    beforeEach(function () {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('test fetch excursions function', (done) => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {
                    "excursions": [
                        {
                            id: 1,
                            title: 'a'
                        },
                        {
                            id: 2,
                            title: 'b'
                        }
                    ],
                    "status": 0,
                    "errorMessage": ""
                },
            });
        });

        const expectedAction = {
            type: types.EXCURSIONS_FETCHED,
            excursionsMap: {
                1: {
                    id: 1,
                    title: 'a'
                }, 2: {
                    id: 2,
                    title: 'b'
                }
            },
            status: 0,
            errorMessage: ''
        };

        const store = mockStore({
            user: {
                token: "dasda"
            }
        });

        //store.dispatch(fetchTokenFromServer('login', 'password'));
        store.dispatch(fetchExcursion()).then(() => {
            expect(store.getActions()).toEqual([expectedAction]);
            done();
        });
    })
});