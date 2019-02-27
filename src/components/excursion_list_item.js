import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {ListItem} from "@material-ui/core";
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import styles from './excursion_list_item.css';

export const ExcursionListItem = ({excursion}) => {
    return (
        <ListItem className={styles.item}>
            <Card className={styles.card}>
                <CardMedia
                    src={excursion['main_photo']}
                    className={styles.image}
                    component="img"
                />
                <div className={styles.details}>
                    <CardContent className={styles.content}>
                        <Typography component="h5" variant="h5">
                            {excursion['title']}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        </ListItem>
    );
};
