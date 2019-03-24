import React from 'react';
import {ExcursionTypeSelector} from "./excursionTypeSelector"
import List from '@material-ui/core/List';

import {MyTextField} from "./keyTextField";
import {ExcursionServicesSelector} from "./excursionServisesSelector";
import {ExcursionTimePicker} from "./excursionTimePicker";
import {ExtendableList} from './extendableList';

import styles from './excursionInput.css';
import {IconButton} from "@material-ui/core";
import {MinutesToHH_MM} from "../../services/timeHelper";


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

    constructor(props) {
        super(props);
        if (props && props.excursion) {
            this.state.excursion = props.excursion;
        }
    };


    handleValueChange = (key) => (value) => {
        const newState = {
            ...this.state,
            excursion: {
                ...this.state.excursion
            }
        };
        newState.excursion[key] = value;

        this.setState(newState);
    };

    getValue = (key) => {
        return this.state.excursion[key];
    };


    render() {

        return (
            ///TODO: может быть вынести список текстовых полей в отдельный компонент
            <div>
                <List>
                    {this.textFields.map((pair) => (
                        <div key={pair.label}>
                            <MyTextField
                                label={pair.label}
                                title={pair.title}
                                onChange={this.handleValueChange(pair.label)}
                                value={this.getValue(pair.label)}
                                inputType={pair.inputType}
                            />
                        </div>
                    ))}
                </List>
                <ExcursionTimePicker
                    onChange={this.handleValueChange("start_time")}
                    title="Начало"
                    value={this.getValue("start_time")}/>
                <ExcursionTimePicker
                    onChange={this.handleValueChange("duration")}
                    title="Длительность"
                    value={MinutesToHH_MM(this.getValue("duration"))}/>
                <ExcursionServicesSelector
                    onChange={this.handleValueChange("services")}
                    services={this.getValue("services")}/>
                <ExtendableList
                    title="Фотографии"
                    value={this.getValue("images")}
                    handleValueChange={this.handleValueChange("images")}/>
                {
                    /*
                    < ExtendableList
                    label={"services"}
                    onAdd={this.addListItem}
                    getValue={this.getListValue}
                    />
                    <ExcursionTypeSelector setKeyValue={this.setKeyValue}/>
                    */
                }
            </div>
        );
    }

}