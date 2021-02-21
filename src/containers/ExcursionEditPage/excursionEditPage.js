import React from 'react'

import {getExcursionsMap} from "../../store/excursions/reducer";
import {connect} from "react-redux";

import ExcursionInput from "../ExcursionInput/excursionInput";

export class ExcursionEdit extends React.Component {
    render() {
        const excursion = this.props.excursionsMap[this.props.match.params.id];

        return (
            <div>
                <ExcursionInput excursion={excursion}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    excursionsMap: getExcursionsMap(state),
});


export default connect(mapStateToProps)(ExcursionEdit);
