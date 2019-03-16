import React from 'react';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PlayListAdd from "@material-ui/icons/PlaylistAdd";

import {MyTextField} from "./key_text_field";
import {ExcursionTypeSelector} from "./excursion_type_selector"
import {ExcursionServicesSelector} from "./excursion_servises_selector";
import {ExcursionDurationPicker} from "./duration_time_picker";

import styles from './excursion_input.css';
import {IconButton} from "@material-ui/core";


export class ExcursionInput extends React.Component {

    state = {
        excursion: {}
    };

    textFields = [
        {label: "region", title: "Регион", inputType: "text"},
        {label: "title", title: "Название", inputType: "text"},
        {label: "description", title: "Описание", inputType: "text"},
        {label: "starting_point", title: "Точка отправления", inputType: "text"},
        {label: "price_adult", title: "Стоиомсть для взрослых", inputType: "number"},
        {label: "price_child", title: "Стоимость для детей", inputType: "number"},
    ];

    addListItem = (name, value) => {
        console.log(name, value);
        console.log(this.state.excursion[name]);
        if (!this.state.excursion[name]) {
            this.state.excursion[name] = [];
        }
        this.state.excursion[name] = this.state.excursion[name].concat([value]);
        console.log(this.state.excursion);
        this.setState(this.state);
    };

    getListValue = name => {
        if (!this.state.excursion[name]) {
            return [];
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

    setKeyValue = (key, value) => {
        this.state.excursion[key] = value;
        this.setState(this.state);
        console.log(this.state.excursion);
    };

    render() {

        return (
            ///TODO: может быть вынести список текстовых полей в отдельный компонент
            <div>
                <ExcursionDurationPicker setKeyValue={this.setKeyValue}/>
                <List>
                    {this.textFields.map((pair) => (
                        <div key={pair.label}>
                            <MyTextField
                                label={pair.label}
                                title={pair.title}
                                setKeyValue={this.setKeyValue}
                                initValue={this.state.excursion[pair.label]}
                                inputType={this.inputType}
                            />
                        </div>
                    ))}
                </List>
                <ExtendableList
                    label={"services"}
                    onAdd={this.addListItem}
                    getValue={this.getListValue}
                />
                <ExcursionTypeSelector setKeyValue={this.setKeyValue}/>
                <ExcursionServicesSelector setKeyValue={this.setKeyValue}/>
            </div>
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