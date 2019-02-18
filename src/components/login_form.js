import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {withStyles} from "@material-ui/core";


const styles = theme => ({
    loginForm: {
        width: "200px",
        margin: "0 auto",
    },
    button: {
        marginTop: "8px"
    }
});

class LoginTab extends Component {
    render() {
        return (
            <div className={this.props.classes.loginForm}>
                <form onSubmit={() => {}}>
                    <TextField
                        id="name"
                        name="name"
                        label="Name"
                        fullWidth/>
                    <TextField
                        id="password"
                        name="password"
                        label="Password"
                        fullWidth
                        type="password"/>
                    <Button className={this.props.classes.button}
                        type="submit"
                        fullWidth
                        variant="raised"
                        color="primary">
                        Log In
                    </Button>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(LoginTab);