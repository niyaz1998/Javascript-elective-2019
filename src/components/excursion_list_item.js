import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {CardActions, ListItem} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import styles from './excursion_list_item.css';

export const ExcursionListItem = ({excursion}) => {
    return (
        <ListItem className={styles.item}>
            <Card className={styles.card}>
                <img src={excursion['main_photo']} className={styles.image}/>
                <div className={styles.details}>
                    <CardContent>
                        <Typography component="h5" variant="h5">
                            {excursion['title_original']}
                        </Typography>
                        <Typography>
                            {excursion['start_time'] + ' - ' + excursion['end_time'] + ' длительность: ' + excursion['duration']}
                        </Typography>
                        <Typography>
                            {'Цена для взрослых: ' + excursion['adult_price'] + '. Цена для детей: ' + excursion['child_price'] }
                        </Typography>
                        <Typography>
                            {'Язык: ' + excursion['language']}
                        </Typography>
                    </CardContent>
                    <CardActions className={styles.controls}>
                            <Button color="primary">
                                редактировать
                            </Button>
                            <Button variant="raised" color="primary">
                                Удалить
                            </Button>
                    </CardActions>
                </div>
            </Card>
        </ListItem>
    );
};
