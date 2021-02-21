import React from "react";
import * as actions from '../../store/user/actions';
import {connect} from "react-redux";
import styles from "./loginPage.css";
import LoginForm from "../../components/LoginForm/loginForm";

class LoginPage extends React.Component {

    submit = values => {
        this.props.dispatch(
            actions.fetchTokenFromServer(values.login, values.password)
        );
    };

    render() {
        return (
            <div className={styles.loginPage}>
                <LoginForm onSubmit={this.submit}/>
            </div>
        );
    }
}

export default connect()(LoginPage);