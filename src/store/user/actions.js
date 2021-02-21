import * as api from "../../services/apiConnector";
import * as Cookies from 'js-cookie';
import 'babel-polyfill';

import * as types from './actionTypes';

export function fetchTokenFromCookies() {
    return (dispatch, getState) => {
        let data = Cookies.get('user-data');
        if (typeof (data) == 'string') {
            data = JSON.parse(data);
            dispatch({
                type: types.TOKEN_FETCHED,
                ...data
            });
        }
    }
}

export function fetchTokenFromServer(email, password) {
    return async (dispatch, getState) => {
        // Start fetching process
        //dispatch(actionCenter.startAction("fetching token"));

        // Send info to the server
        const resp = await api.signIn(email, password);
        console.log(resp);
        if (resp.status === 0) {
            const data = {
                token: resp.token,
                status: resp.status,
                errorMessage: resp.errorMessage
            };

            // Place data in cookies
            Cookies.set('user-data', JSON.stringify(data));

            // Resolve fetching process
            dispatch({
                type: types.TOKEN_FETCHED,
                ...data
            });
            //dispatch(actionCenter.finishAction("fetching token"));
        } else {
            //dispatch(actionCenter.failAction("fetching token", resp.error_message));
        }
    }
}