import * as api from "../../services/apiConnector";
import * as Cookies from 'js-cookie';

import * as types from './actionTypes';

export function fetchExcursion(token) {
    return async (dispatch, getState) => {
        let data = Cookies.get('excursions-data');
        if (typeof (data) == 'string') {
            data = JSON.parse(data);
            dispatch({
                type: types.EXCURSIONS_FETCHED,
                ...data
            });
        } else {
            const resp = await api.getExcursions(token);
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

                // Place data in cookies
                Cookies.set('excursions-data', JSON.stringify(data));

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
}