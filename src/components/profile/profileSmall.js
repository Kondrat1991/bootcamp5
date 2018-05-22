import React from 'react';
import PropTypes from "prop-types";

const Small = ({image}) => (
    <img src={image} className="small-image" alt="SmallAvatar"/>
);

Small.propTypes = {
    image: PropTypes.string,
    onChangeImage: PropTypes.func,
    onDelete: PropTypes.func
};

Small.defaultProps = {
    image: '/no-img.png',
    onChangeImage: () => {},
    onDelete: () => {}
};

export  default Small;