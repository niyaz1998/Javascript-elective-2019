import React from 'react';


import styles from './excursionInput.css';
import {Typography} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

/*
state = {
        "HUMN": {text: "Экскурсовод", select: false},
        "LINE": {text: "Пешеходный маршрут", select: false},
        "BUS": {text: "Туристический автобус", select: false},
        "BOAT": {text: "Морская прогулка", select: false},
        "DIVE": {text: "Спортивная экипировка", select: false},
        "BIKE": {text: "Спортивный транспорт", select: false},
        "TICT": {text: "Билеты в музеи", select: false},
        "ICEC": {text: "Дегустации", select: false},
        "FORK": {text: "Питание", select: false},
        "MASK": {text: "Театрализованное шоу", select: false},
        "BEDH": {text: "Ночевка в отеле", select: false},
    };


const services = [
    {code: "HUMN", text: "Экскурсовод"},
    {code: "LINE", text: "Пешеходный маршрут"},
    {code: "BUS", text: "Туристический автобус"},
    {code: "BOAT", text: "Морская прогулка"},
    {code: "DIVE", text: "Спортивная экипировка"},
    {code: "BIKE", text: "Спортивный транспорт"},
    {code: "TICT", text: "Билеты в музеи"},
    {code: "ICEC", text: "Дегустации"},
    {code: "FORK", text: "Питание"},
    {code: "MASK", text: "Театрализованное шоу"},
    {code: "BEDH", text: "Ночевка в отеле"},
];
*/

// handleChange - function that will be called when value changes
// label - value that will be passed to handleChange function

// title - title of the text field
export class ExcursionServicesSelector extends React.Component {

    constructor(props) {
        super(props);
        if (props.services) {
            props.services.forEach((service) => {
                this.state[service].select = true;
            })
        }
    }

    state = {
        HUMN: {text: "Экскурсовод", select: false},
        LINE: {text: "Пешеходный маршрут", select: false},
        BUS: {text: "Туристический автобус", select: false},
        BOAT: {text: "Морская прогулка", select: false},
        DIVE: {text: "Спортивная экипировка", select: false},
        BIKE: {text: "Спортивный транспорт", select: false},
        TICT: {text: "Билеты в музеи", select: false},
        ICEC: {text: "Дегустации", select: false},
        FORK: {text: "Питание", select: false},
        MASK: {text: "Театрализованное шоу", select: false},
        BEDH: {text: "Ночевка в отеле", select: false},
    };

    onSelect = (code) => () => {
        const newState = {
            ...this.state
        };
        newState[code].select = !this.state[code].select;
        this.setState(newState);
        let result = [];
        for (code in this.state) {
            if (this.state[code].select) {
                result.push(code);
            }
        }
        this.props.onChange("services", result);
    };

    render() {
        return (
            <div>
                <Typography>
                    Выберите сервисы экскурсии
                </Typography>
                <div className={styles.servicesMainContainer}>
                    {Object.keys(this.state).map((code) => (
                        <div key={code}>
                            <FormControlLabel
                                control={<Checkbox
                                    checked={this.state[code].select}
                                    onChange={this.onSelect(code)}
                                    color="primary"
                                />}
                                label={this.state[code].text}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}