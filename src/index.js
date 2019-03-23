import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from './store/reducers';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import orange from "@material-ui/core/colors/orange";
import {BrowserRouter} from "react-router-dom";

/*
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.baseURL = BACKEND_URL;
*/
const store = createStore(
    combineReducers(reducers),
    applyMiddleware(thunk)
);

const theme = createMuiTheme(
    {
        typography: {
            useNextVariants: true,
        },
        palette: {
            primary: {
                ...orange,
                contrastText: "#fff"
            }
        },
        overrides: {
            MuiFab: {
                root: {
                    position: 'absolute',
                    bottom: '2rem',
                    right: '2rem'
                }
            }
        }
    }
);

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById("root"));