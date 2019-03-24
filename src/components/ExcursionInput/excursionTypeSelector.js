import React from 'react';


import styles from './excursionInput.css';
import {Button, List, Typography} from "@material-ui/core";

const types = {
    "WTCH": "Обзорная",
    "HSTR": "Историческая",
    "FOOD": "Гастрономическая",
    "CULT": "Культурная",
    "WAVE": "Морская",
    "SURF": "Спортивная",
    "CONF": "Развлекательная",
};

// handleChange - function that will be called when value changes
// label - value that will be passed to handleChange function

// title - title of the text field
export class ExcursionTypeSelector extends React.Component {

    getButtonColor(code) {
        if (code === this.props.value) {
            return "primary";
        }
        return "default";
    }

    onChange = (key) => () => {
        this.props.handleValueChange(key);
    };

    render() {
        return (
            <div>
                <Typography>
                    Выберите тип экскурсии
                </Typography>
                <List className={styles.horizontalList}>
                    {Object.keys(types).map((key) => (
                        <div className={styles.selectableButton} key={key}>
                            <Button
                                variant="contained"
                                color={this.getButtonColor(key)}
                                onClick={this.onChange(key)}>
                                {types[key]}
                            </Button>
                        </div>
                    ))}
                </List>
            </div>
        );
    }
}