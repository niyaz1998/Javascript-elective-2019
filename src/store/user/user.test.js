
import moxios from 'moxios';
import createStore from 'redux-mock-store';
import thunk from "redux-thunk";
import {fetchTokenFromServer} from "./actions";
import "babel-polyfill";


describe('CharactersList', () => {


    beforeEach(function () {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('test render empty component', async () => {
        const mockStore = createStore([thunk]);
        const initialState = {};
        const store = mockStore(initialState);

        moxios.stubRequest('/admin/token', {
            "token": "this_is_token", "status": 0, "errorMessage": ""
        });

        store.dispatch(await fetchTokenFromServer('login', 'password'));
        console.log(store);
        expect(store).toMatchSnapshot();
    })
});