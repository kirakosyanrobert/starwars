import React from 'react';
import PropTypes from 'prop-types';

const GenderView = ({gender}) => {
    let icon;
    if(gender === "male") {
        icon = <i className="fa fa-mars" />
    }else if(gender === "female") {
        icon = <i className="fa fa-venus" />
    } else {
        icon = gender;
    }

    return (
        <span>{icon}</span>
    )
}

GenderView.porpTypes = {
    height: PropTypes.string
}

export default GenderView;