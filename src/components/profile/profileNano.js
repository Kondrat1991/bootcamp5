import React from 'react';
import PropTypes from "prop-types";

const Nano = ({image}) => (
    <img src={image} className="nano-image" alt="NanoAvatar"/>
);

Nano.propTypes = {
    image: PropTypes.string,
    onChangeImage: PropTypes.func,
    onDelete: PropTypes.func
};

Nano.defaultProps = {
    image: '/no-img.png',
    onChangeImage: () => {},
    onDelete: () => {}
};

export  default Nano;

