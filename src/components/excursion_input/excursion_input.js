import React from 'react';
import TextField from '@material-ui/core/TextField';
import DropDownMenu from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PlayListAdd from "@material-ui/icons/PlaylistAdd"


import styles from './excursion_input.css';
import {IconButton} from "@material-ui/core";


export class ExcursionInput extends React.Component {

    state = {
        excursion: {}
    };

    addListItem = (name, value) => {
        console.log(name, value);
        console.log(this.state.excursion[name]);
        if (!this.state.excursion[name]) {
            this.state.excursion[name] = [];
        }
        this.state.excursion[name] = this.state.excursion[name].concat([value]);
        console.log(this.state.excursion[name]);
        this.setState(this.state);
    };

    getListValue = name => {
        if(!this.state.excursion[name]) {
            return [];
        } else {
            return this.state.excursion[name];
        }
    };


    handleTextChange = name => event => {
        this.state.excursion[name] = event.target.value;
        this.setState(
            this.state
        );
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
                <ExtendableList
                    label={"services"}
                    onAdd={this.addListItem}
                    getValue={this.getListValue}
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

class ExtendableList extends React.Component {

    state = {
        value: ""
    };

    onChange = event => {
        this.state.value = event.target.value;
        this.setState(
            this.state
        );
    };

    onButtonClick = (onItemAdd) => () => {
        if (this.state.value && this.state.value !== "") {
            onItemAdd(this.props.label, this.state.value);
            this.state.value = "";
            this.setState(this.state);
        }
    };


    render() {
        return (
            <div>
                <div>
                    Начало увеличиваемого списка
                </div>
                <List className={styles.extendableList}>
                    {this.props.getValue(this.props.label).map((text, i) => (
                        <ListItem key={i}>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                    <div>
                        <TextField
                            className={styles.textField}
                            value={this.state.value}
                            onChange={this.onChange}
                            margin="normal"
                        />
                        <IconButton
                            className={styles.iconButton}
                            color="primary"
                            onClick={this.onButtonClick(this.props.onAdd)}>
                            <PlayListAdd/>
                        </IconButton>
                    </div>
                </List>
            </div>
        );
    }
}