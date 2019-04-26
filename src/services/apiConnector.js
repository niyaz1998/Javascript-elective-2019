// This file is needed to describe all the calls to API. Example is below

import axios from 'axios';

//const BASE_URL = "http://0.0.0.0:5000";
const BASE_URL = BACKEND_URL;

function checkString(string) {
    return typeof (string) == 'string' &&
    string.trim().length > 0 ?
        string.trim() : false;
}

function checkNumber(number) {
    return typeof (number) == 'number' &&
    number > 0 ?
        number : false;
}

// Implementation of request to /admin/token
// Get authorization token from server
// Required data: login, pass (md5_hash)
export async function signIn(login, pass) {
    if (login && pass) {
        return await get(
            {
                login,
                pass
            },
            '/admin/token');
    } else {
        return {
            status: -1,
            error: "Missed required data"
        }
    }
}

// Implementation of request to /admin/excursions
// Get all the excursions considering given filters and search parameters
// Required data: token
export async function getExcursions(token) {
    if (token) {
        return await get(
            {token},
            '/admin/excursions');
    } else {
        return {
            status: -1,
            error: "Missed required data"
        }
    }
}

// Implementation of request to /admin/excursions
// Get all the excursions considering given filters and search parameters
// Required data: token
export async function newExcursion(token, excursion) {
    if (token && excursion) {
        return await post(
            excursion,
            {token},
            '/admin/excursions');
    } else {
        return {
            status: -1,
            error: "Missed required data"
        }
    }
}

////////////////////////////////////////////////////////////////////
/// Help functions                                               ///
////////////////////////////////////////////////////////////////////


// url will be formed as BASE_URL + URL
// params is an object with params. OBJECT, this is important
async function get(params, URL) {
    if (params && URL) {
        const url = BASE_URL + URL;

        try {
            const response = await axios.get(url, {
                    params: params,
                    headers: {'Content-Type': 'application/json'}
                }
            );

            if (response.status === 200) {
                return response.data;
            } else {
                return {
                    status: -1,
                    error_message: 'Something went wrong... Server returned code '
                        + response.status
                };
            }
        } catch (e) {
            console.log(e);
            return {
                status: -1,
                error_message: 'Something went wrong... ' + e
            };
        }
    } else {
        return {
            status: -1,
            error_message: "Missed required data"
        }
    }
}

// data is Object
// url will be formed as BASE_URL + URL
// params is an object with params. OBJECT, this is important
async function post(data, params, URL) {
    const url = BASE_URL + URL;
    try {
        const response = await axios.post(url, data, {
                headers: {'Content-Type': 'application/json'},
                params: params
            }
        );

        if (response.status === 200) {
            return response.data;
        } else {
            return {
                status: -1,
                error_message: 'Something went wrong... Server returned code '
                    + response.status
            };
        }
    } catch (e) {
        return {
            status: -1,
            error_message: 'Something went wrong... ' + e
        };
    }
}