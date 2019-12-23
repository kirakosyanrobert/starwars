import React from 'react';
import PropTypes from 'prop-types';

const HeightView = ({total}) => {
    let realFeet = ((total * 0.393700) / 12);
    let feet = Math.floor(realFeet);
    let inches = Math.round((realFeet - feet) * 12);
    
    return (
        <span>{`${total} cm (${feet}ft ${inches}in)`}</span>
    )
}

HeightView.porpTypes = {
    height: PropTypes.number
}

export default HeightView;