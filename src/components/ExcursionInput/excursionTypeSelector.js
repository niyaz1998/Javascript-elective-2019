import React from 'react';


import styles from './excursionInput.css';
import {Button, List} from "@material-ui/core";

const types = [
    {code: "WTCH", text: "Обзорная"},
    {code: "HSTR", text: "Историческая"},
    {code: "FOOD", text: "Гастрономическая"},
    {code: "CULT", text: "Культурная"},
    {code: "WAVE", text: "Морская"},
    {code: "SURF", text: "Спортивная"},
    {code: "CONF", text: "Развлекательная"},
];

// handleChange - function that will be called when value changes
// label - value that will be passed to handleChange function

// title - title of the text field
export class ExcursionTypeSelector extends React.Component {

    state = {
        type: ""
    };

    getButtonColor(code) {
        if (code === this.state.type) {
            return "primary";
        }
        return "default";
    }

    onClick = (code) => () => {
        this.setState(
            {
                type: code
            }
        );
        this.props.setKeyValue("type", code);
    };

    render() {
        return (
            <div>
                <div>
                    Выберите тип экскурсии
                </div>
                <List className={styles.horizontalList}>
                    {types.map((type) => (
                        <div className={styles.selectableButton} key={type.code}>
                            <Button
                                variant="contained"
                                color={this.getButtonColor(type.code)}
                                onClick={this.onClick(type.code)}>
                                {type.text}
                            </Button>
                        </div>
                    ))}
                </List>
            </div>
        );
    }
}