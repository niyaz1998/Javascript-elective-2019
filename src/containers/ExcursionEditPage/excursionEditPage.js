import React from 'react'

import {getExcursionsMap} from "../../store/excursions/reducer";
import {connect} from "react-redux";

import styles from "./excursionEditPage.css"
import {ExcursionInput} from "../../components/ExcursionInput/excursionInput";

export class ExcursionEdit extends React.Component {
    render() {
        const excursion = this.props.excursionsMap[this.props.match.params.id];

        console.log("excursion for edit", excursion);
        return (
            <div>
                <ExcursionInput excursion={excursion}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("state", state);
    return {
        excursionsMap: getExcursionsMap(state),
    }
};


export default connect(mapStateToProps)(ExcursionEdit);
