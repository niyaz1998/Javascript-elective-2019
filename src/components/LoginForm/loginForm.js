import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styles from "./loginForm.css";
import {reduxForm, Field} from 'redux-form';

const loginField = (props) => {
    return <TextField {...props} label="Name" fullWidth value={props.input.value} onChange={props.input.onChange}/>;
};

const passwordField = (props) => {
    return <TextField {...props} label="Password" fullWidth type="password" value={props.input.value}
                      onChange={props.input.onChange}/>;
};

class LoginForm extends Component {

    render() {
        const {handleSubmit} = this.props;
        return (
            <form className={styles.loginContainer} onSubmit={handleSubmit}>
                <div className={styles.textInput}>
                    <Field component={loginField} name="login"/>
                </div>
                <div className={styles.textInput}>
                    <Field component={passwordField} name="password"/>
                </div>
                <div className={styles.textInput}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary">
                        Log In
                    </Button>
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login'
})(LoginForm);