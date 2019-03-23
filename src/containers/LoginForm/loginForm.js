import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import * as actions from '../../store/user/actions';
import {connect} from "react-redux";

class LoginForm extends React.Component {

    state = {
        logInForm: {
            login: "name",
            password: "123"
        }
    };

    onSignInSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(
            actions.fetchTokenFromServer(this.state.logInForm.login,
                this.state.logInForm.password)
        );
    };

    handleTextChange = (key) => (event) => {
        const newState = {
            ...this.state,
            logInForm: {
                ...this.state.logInForm
            }
        };
        newState.logInForm[key] = event.target.value;

        this.setState(newState);
    };

    render() {
        return (
            <div >
                <TextField
                    label="Name"
                    fullWidth
                    value={this.state.logInForm.login}
                    onChange={this.handleTextChange}
                />
                <TextField
                    label="Password"
                    fullWidth
                    value={this.state.logInForm.login}
                    onChange={this.handleTextChange}
                    type="password"/>
                <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={this.onSignInSubmit}>
                    Log In
                </Button>
            </div>
        );
    }
}

export default connect()(LoginForm);