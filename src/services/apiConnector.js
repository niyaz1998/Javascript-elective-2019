// This file is needed to describe all the calls to API. Example is below

import axios from 'axios';

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

// Implementation of request to /staff/login
// Get authorization token from server
// Required data: email, password
export async function signIn(email, password_hash) {
    if (email && password_hash) {
        return await post(
            {
                email,
                password_hash
            },
            '/login');
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
async function post(data, URL) {
    const url = BASE_URL + URL;
    try {
        const response = await axios.post(url, data, {
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
        return {
            status: -1,
            error_message: 'Something went wrong... ' + e
        };
    }
}

// this function is similar to function above
// needed just to be sure
// TODO: may be remove this function
// data is Object
// url will be formed as BASE_URL + URL
// params is an object with params. OBJECT, this is important
async function postWithParams(data, params, URL) {
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