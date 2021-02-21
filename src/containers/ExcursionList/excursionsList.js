import React from "react"
import List from '@material-ui/core/List'
import {connect} from "react-redux";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import ExcursionListItem from '../../components/ExcursionListItem/excursionListItem'
import {getExcursionsMap, getExcursionLoadError} from "../../store/excursions/reducer";
import {fetchExcursion} from "../../store/excursions/actions";

import styles from './excursionsList.css';


class ExcursionsList extends React.Component {

    constructor(props) {
        super(props);
        props.fetchExcursion();
    }

    onAddClick = () => {
        this.props.history.push(`/add_excursion`)
    };

    render() {

        if (this.props.error && this.props.error.length > 0) {
            return <h3>{this.props.error}</h3>
        }

        if (!this.props.excursionsMap) {
            return <h1>Loading...</h1>
        }

        return (
            <div>
                <List className={styles.root}>
                    {Object.keys(this.props.excursionsMap).map((excursionID) =>
                        <ExcursionListItem
                            key={excursionID}
                            excursion={this.props.excursionsMap[excursionID]}
                        />
                    )}
                </List>

                <Fab color="primary" aria-label="Add" onClick={this.onAddClick}>
                    <AddIcon/>
                </Fab>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        excursionsMap: getExcursionsMap(state),
        error: getExcursionLoadError(state),
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchExcursion: (token) => dispatch(fetchExcursion(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExcursionsList);
