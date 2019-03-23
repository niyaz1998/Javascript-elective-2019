import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

const nameId = "name";
const passwordId = "password";

const logInFunc = () => {
    const name = document.getElementById(nameId).value;
    const password = document.getElementById(passwordId).value;

    axios({
        method: 'post',
        url: '/login',
        data: {
            name: name,
            password: password
        }
    }).then((response) => {
        console.log(response.data['answer']);
    }).catch((e) => {
        console.log(e);
    }).then(() => {

    });
};

class LoginTab extends Component {
    render() {
        return (
            <div >
                <TextField
                    id={nameId}
                    name={nameId}
                    label="Name"
                    fullWidth/>
                <TextField
                    id={passwordId}
                    name={passwordId}
                    label="Password"
                    fullWidth
                    type="password"/>
                <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={logInFunc}>
                    Log In
                </Button>
            </div>
        );
    }
}

export default LoginTab;