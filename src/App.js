import React, {Component} from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

import LoginTab from "./pages/login_form";
import {ExcursionsList} from "./pages/excursions_list"

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
        }
    }
);

class App extends Component {
    render() {
        return (
            //  login page
            // page to see list of all excursions (short information)
            // page to add new excursion
            // page to see detailed information about particular excursions (by id) and edit fields if needed
            <MuiThemeProvider theme={theme}>
                <BrowserRouter>
                    <main>
                        <Switch>
                            <Route path="/login" component={LoginTab}/>
                            <Route path="/excursions_list" component={ExcursionsList}/>
                            <Route path="/add_excursion" component={() => <h1> Not implemented yet</h1>}/>
                            <Route path="/excursion/:id" component={() => <h1> Not implemented yet</h1>}/>
                            <Redirect from="*" to="/excursions_list"/>
                        </Switch>
                    </main>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}

export default App;