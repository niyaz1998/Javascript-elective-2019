import React from "react"
import axios from 'axios'
import List from '@material-ui/core/List'

import {ExcursionListItem} from '../components/excursion_list_item'
import styles from './excursions_list.css';


export class ExcursionsList extends React.Component {

    state = {};

    componentDidMount() {
        this.loadExcursions();
    }

    loadExcursions = () => {
        this.setState({error: void 0});
        axios.get('/excursions')
            .then(response => {
                this.setState({excursions: response.data.excursions});
                console.log(response.data.excursions);
            })
            .catch((err) => {
                this.setState({
                    error: 'Error occurred'
                })
            })
    };

    render() {

        if (this.state.error) {
            return <h3>{this.state.error}</h3>
        }

        if (!this.state.excursions) {
            return <h1>Loading...</h1>
        }

        return (
            <div>
                <List className={styles.root}>
                    {this.state.excursions.map((excursion) =>
                        <ExcursionListItem
                            key={excursion.id}
                            excursion={excursion}
                        />
                    )}
                </List>
            </div>
        )
    }
}
