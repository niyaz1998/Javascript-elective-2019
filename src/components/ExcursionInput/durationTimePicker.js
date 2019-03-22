import React from 'react';
import TextField from '@material-ui/core/TextField';
import 'date-fns';


import styles from './excursionTextInput.css';

// handleChange - function that will be called when value changes
// label - value that will be passed to handleChange function
// title - title of the text field
export class ExcursionDurationPicker extends React.Component {
    state = {
        // The first commit of Material-UI
        value: "01:00",
    };


    handleTextChange = event => {
        this.state.value = event.target.value;
        this.setState(
            this.state
        );

        let mins = this._toMinutes(this.state.value);
        this.props.setKeyValue("duration", mins);
    };

    _toMinutes(string) {
        let a = string.split(':');
        let hours = parseInt(a[0], 10);
        let minutes = parseInt(a[1], 10);
        return hours * 60 + minutes;
    }

    render() {
        return (
            <div className={styles.timeContainer}>
                <TextField
                    label="Длительность"
                    type="time"
                    defaultValue="01:00"
                    className={styles.timeField}
                    onChange={this.handleTextChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                />
            </div>
        );
    }
}