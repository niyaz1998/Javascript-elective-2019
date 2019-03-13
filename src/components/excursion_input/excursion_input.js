import React from 'react';
import TextField from '@material-ui/core/TextField';


import styles from './excursion_input.css';


export class ExcursionInput extends React.Component {

    state = {
        excursion: {}
    };


    handleTextChange = name => event => {
        this.state.excursion[name] = event.target.value;
        this.setState(
            this.state
        );
        console.log(this.state);
    };

    getValue = name => {
        if (!this.state.excursion[name]) {
            return "";
        } else {
            return this.state.excursion[name];
        }
    };


    constructor(props) {
        super(props);
        if (props && props.excursion) {
            this.state.excursion = props.excursion;
        }
    }

    render() {

        return (
            <div>
                <MyTextField
                    label={"region"}
                    title={"Регион"}
                    handleChange={this.handleTextChange}
                    getValue={this.getValue}
                />
                <MyTextField
                    label={"title"}
                    title={"Название"}
                    handleChange={this.handleTextChange}
                    getValue={this.getValue}
                />
                <MyTextField
                    label={"duration"}
                    title={"Длительность (в минутах)"}
                    handleChange={this.handleTextChange}
                    getValue={this.getValue}
                />
                <MyTextField
                    label={"description"}
                    title={"Описание"}
                    handleChange={this.handleTextChange}
                    getValue={this.getValue}
                />
                <MyTextField
                    label={"starting_point"}
                    title={"Точка отправления"}
                    handleChange={this.handleTextChange}
                    getValue={this.getValue}
                />
                <MyTextField
                    label={"price_adult"}
                    title={"Стоимость для взрослых"}
                    handleChange={this.handleTextChange}
                    getValue={this.getValue}
                />
                <MyTextField
                    label={"price_child"}
                    title={"Стоимость для взрослых"}
                    handleChange={this.handleTextChange}
                    getValue={this.getValue}
                />
                <MyTextField
                    label={"operator_id"}
                    title={"ID оператора"}
                    handleChange={this.handleTextChange}
                    getValue={this.getValue}
                />
            </div>
        );
    }

}

// handleChange - function that will be called when value changes
// label - value that will be passed to handleChange function
// title - title of the text field
class MyTextField extends React.Component {
    render() {
        return (
            <TextField
                className={styles.textField}
                label={this.props.title}
                value={this.props.getValue(this.props.label)}
                onChange={this.props.handleChange(this.props.label)}
                margin="normal"
            />
        );
    }
}
