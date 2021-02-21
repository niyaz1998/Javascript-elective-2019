import React from "react";
import styles from "./excursionInput.css";
import {IconButton} from "@material-ui/core";
import ListItem from '@material-ui/core/ListItem/index';
import ListItemText from '@material-ui/core/ListItemText/index';
import PlayListAdd from "@material-ui/icons/PlaylistAdd";
import TextField from '@material-ui/core/TextField/index';
import List from '@material-ui/core/List/index';
import Typography from "@material-ui/core/Typography/index";

export class ExtendableList extends React.Component {

    state = {
        value: ""
    };

    onChange = event => {
        const newState = {
            ...this.state
        };
        newState.value = event.target.value;
        this.setState(newState);
    };

    onButtonClick = () => {
        if (this.state.value && this.state.value !== "") {
            let newArray = [...this.props.value, this.state.value];
            this.props.handleValueChange(newArray);
            const newState = {
                ...this.state,
                value: ""
            };
            this.setState(newState);
        }
    };

    render() {
        return (
            <div>
                <Typography>
                    {this.props.title}
                </Typography>
                <List className={styles.extendableList}>
                    {this.props.value.map((text, i) => (
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
                            onClick={this.onButtonClick}>
                            <PlayListAdd/>
                        </IconButton>
                    </div>
                </List>
            </div>
        );
    }
}