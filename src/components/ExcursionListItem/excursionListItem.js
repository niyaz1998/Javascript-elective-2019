import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {CardActions, ListItem} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';

import styles from './excursionListItem.css';
import React from "react";


/*
Excursions key set:
id, title, price, start_time, duration,
services, image, type, images, description,
starting_point, available_dates, price_adult, price_child
 */

class ExcursionListItem extends React.Component {

    onEditClick = (id) => () => {
        this.props.history.push(`/excursion/${id}`)
    };

    render() {
        const excursion = this.props.excursion;
        return (
            <ListItem className={styles.item}>
                <Card className={styles.card}>
                    <img src={excursion['images'][0]} className={styles.image} alt={"Loading..."}/>
                    <div className={styles.details}>
                        <CardContent>
                            <Typography component="h5" variant="h5">
                                {excursion['title']}
                            </Typography>
                            <Typography>
                                {'Начало: ' + excursion['start_time'] + ' длительность: ' + excursion['duration']}
                            </Typography>
                            <Typography>
                                {'Цена для взрослых: ' + excursion['price_adult'] + ' РУБ. Цена для детей: ' + excursion['price_child'] + ' РУБ'}
                            </Typography>
                        </CardContent>
                        <CardActions className={styles.controls}>
                            <Button color="primary" onClick={this.onEditClick(excursion['id'])}>
                                редактировать
                            </Button>
                            <Button variant="contained" color="primary">
                                Удалить
                            </Button>
                        </CardActions>
                    </div>
                </Card>
            </ListItem>
        );
    }
}


export default withRouter(ExcursionListItem);