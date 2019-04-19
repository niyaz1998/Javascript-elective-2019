import React, {Component} from "react";
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';

import LoginTab from "./containers/LoginPage/loginPage";
import ExcursionsList from "./containers/ExcursionList/excursionsList"
import {ExcursionInput} from "./components/ExcursionInput/excursionInput";
import ExcursionEdit from "./containers/ExcursionEditPage/excursionEditPage";
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
                        <Route path="/excursions_list" component={ExcursionsList}/>
                        <Route path="/add_excursion" component={ExcursionInput}/>
                        <Route path="/excursion/:id" component={ExcursionEdit}/>
                        <Redirect from="*" to="/excursions_list"/>
                    </Switch>
                </main>
            );
        } else {
            return (
                <main>
                    <Switch>
                        <Route path="/login" component={LoginTab}/>
                        <Redirect from="*" to="/login"/>
                    </Switch>
                </main>);
        }
    }
}


const mapStateToProps = (state) => {
    return {
        token: getUserToken(state),
    }
};

export default withRouter(connect(mapStateToProps)(App));