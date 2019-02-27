import React, { Component } from "react";
import {BrowserRouter, Route} from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

import LoginTab from  "./login_form";

const theme = createMuiTheme(
    {
        palette: {
            primary: {
                ...orange,
                contrastText: "#fff"
            }
        }
    }
);

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <BrowserRouter>
                    <div>
                        // login page
                        <Route path="/login" component={LoginTab}/>
                        // page to see list of all excursions (short information)
                        <Route path="/excursions" component={() => <h1> Not implemented yet</h1>}/>
                        // page to add new excursion
                        <Route path="/add_excursion" component={() => <h1> Not implemented yet</h1>}/>
                        // page to see detailed information about particular excursions (by id) and edit fields if needed
                        <Route path="/excursion/:id" component={() => <h1> Not implemented yet</h1>}/>
                    </div>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}

export default App;