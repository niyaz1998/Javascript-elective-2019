import React from 'react';
import TextField from '@material-ui/core/TextField';


import styles from './excursion_input.css';

// handleChange - function that will be called when value changes
// label - value that will be passed to handleChange function
// title - title of the text field
export class MyTextField extends React.Component {

    state = {
        value: ""
    };

    constructor(props) {
        super(props);
        if (props.initValue) {
            this.state.value = props.initValue;
        }
    }

    handleTextChange = event => {
        this.state.value = event.target.value;
        this.setState(
            this.state
        );
        this.props.setKeyValue(this.props.label, this.state.value);
    };

    render() {
        return (
            <TextField
                className={styles.textField}
                label={this.props.title}
                value={this.state.value}
                type={this.props.inputType}
                onChange={this.handleTextChange}
                margin="normal"
            />
        );
    }
}