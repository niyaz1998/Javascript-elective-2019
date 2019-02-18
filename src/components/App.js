import React, { Component } from "react";
import LoginTab from  "./login_form";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

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
                <LoginTab />
            </MuiThemeProvider>
        );
    }
}

export default App;