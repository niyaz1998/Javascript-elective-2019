import * as api from "../../services/apiConnector";
import * as Cookies from 'js-cookie';

import * as types from './actionTypes';
import {getUserToken} from "../user/reducer";

export function fetchExcursion() {
    return async (dispatch, getState) => {
        const resp = await api.getExcursions(getUserToken(getState()));
        console.log(resp);
        if (resp.status === 0) {

            let excursionsMap = {};
            resp.excursions.forEach((excursion) => {
                excursionsMap[excursion.id] = excursion;
            });

            const data = {
                status: resp.status,
                errorMessage: resp.errorMessage,
                excursionsMap: excursionsMap,
            };

            // Resolve fetching process
            dispatch({
                type: types.EXCURSIONS_FETCHED,
                ...data
            });
            //dispatch(actionCenter.finishAction("fetching token"));
        } else {
            //dispatch(actionCenter.failAction("fetching token", resp.error_message));
        }
    }
}

export function createNewExcursion(excursion) {
    return async (dispatch, getState) => {
        const resp = await api.newExcursion(getUserToken(getState()), excursion);
        console.log(resp);
        if (resp.status === 0) {

            // Resolve fetching process
            dispatch({
                type: types.EXCURSION_CREATED,
                id: resp.id
            });
            //dispatch(actionCenter.finishAction("fetching token"));
        } else {
            //dispatch(actionCenter.failAction("fetching token", resp.error_message));
        }
    }
}