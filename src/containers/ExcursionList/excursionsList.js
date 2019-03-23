import React from "react"
import List from '@material-ui/core/List'
import {connect} from "react-redux";

import {ExcursionListItem} from '../../components/ExcursionListItem/excursionListItem'
import {getExcursionsMap, getExcursionLoadError} from "../../store/excursions/reducer";
import {fetchExcursion} from "../../store/excursions/actions";
import {getUserToken} from "../../store/user/reducer";

import styles from './excursionsList.css';


class ExcursionsList extends React.Component {

    constructor(props) {
        super(props);
        props.dispatch(fetchExcursion(props.token));
    }

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
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        excursionsMap: getExcursionsMap(state),
        token: getUserToken(state),
        error: getExcursionLoadError(state),
    }
};


export default connect(mapStateToProps)(ExcursionsList);
