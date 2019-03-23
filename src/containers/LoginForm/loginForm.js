import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import * as actions from '../../store/user/actions';
import {connect} from "react-redux";
import styles from "./loginForm.css"

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
            <div className={styles.loginPage}>
                <div className={styles.loginContainer}>
                    <div className={styles.textInput}>
                        <TextField
                            label="Name"
                            fullWidth
                            value={this.state.logInForm.login}
                            onChange={this.handleTextChange("login")}
                        />
                    </div>
                    <div className={styles.textInput}>
                        <TextField
                            label="Password"
                            fullWidth
                            value={this.state.logInForm.password}
                            onChange={this.handleTextChange("password")}
                            type="password"/>
                    </div>
                    <div className={styles.textInput}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.onSignInSubmit}>
                            Log In
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(LoginForm);