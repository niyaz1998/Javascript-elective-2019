import React, {Component} from "react";
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

import LoginTab from "./containers/LoginForm/loginForm";
import {ExcursionsList} from "./containers/ExcursionList/excursionsList"
import {ExcursionInput} from "./components/ExcursionInput/excursionTextInput";
import {fetchTokenFromCookies} from "./store/user/actions";

import {connect} from 'react-redux';
import {getUserToken} from "./store/user/reducer";


class App extends Component {
    constructor(props) {
        super(props);
        props.dispatch(fetchTokenFromCookies());
    }

    render() {
        if (this.props.token) {
            return (
                        <main>
                            <Switch>
                                <Route path="/login" component={LoginTab}/>
                                <Route path="/excursions_list" component={ExcursionsList}/>
                                <Route path="/add_excursion" component={ExcursionInput}/>
                                <Route path="/excursion/:id" component={() => <h1> Not implemented yet</h1>}/>
                                <Redirect from="*" to="/add_excursion"/>
                            </Switch>
                        </main>
            );
        } else {
            return (
                        <Switch>
                            <Route path="/login" component={LoginTab}/>
                            <Redirect from="*" to="/login"/>
                        </Switch>);
        }
    }
}


const mapStateToProps = (state) => {
    return {
        token: getUserToken(state),
    }
};

export default withRouter(connect(mapStateToProps)(App));