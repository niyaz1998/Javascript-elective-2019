import React from 'react';
import TextField from '@material-ui/core/TextField';


import styles from './excursionInput.css';

// handleChange - function that will be called when value changes
// label - value that will be passed to handleChange function
// title - title of the text field
export class MyTextField extends React.Component {

    constructor(props) {
        super(props);
    }

    onNumberChange = (event) => {
        let value = event.target.value;
        if (!isNaN(value) && value.toString().indexOf('.') !== -1) {
            this.props.onChange(value);
        }
    };

    onTextChange = (event) => {
        this.props.onChange(event.target.value);
    };

    render() {
        if (this.props.inputType === 'number') {
            return (
                <TextField
                    className={styles.textField}
                    label={this.props.title}
                    value={this.props.value}
                    onChange={this.onNumberChange}
                    margin="normal"
                />
            );
        }
        return (
            <TextField
                className={styles.textField}
                label={this.props.title}
                value={this.props.value}
                onChange={this.onTextChange}
                margin="normal"
            />
        );
    }
}