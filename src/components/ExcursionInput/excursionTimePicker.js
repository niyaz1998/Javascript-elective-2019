import React from 'react';
import TextField from '@material-ui/core/TextField';
import 'date-fns';


import styles from './excursionInput.css';

export class ExcursionTimePicker extends React.Component {

    onTextChange = (event) => {
        this.props.onChange(event.target.value);
    };

    render() {
        return (
            <div className={styles.timeContainer}>
                <TextField
                    label={this.props.title}
                    value={this.props.value}
                    type="time"
                    className={styles.timeField}
                    onChange={this.onTextChange}
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