import React from 'react';
import PropTypes from "prop-types";
import './profile.css';


const Profile = (props) => {
    return (
        <div>
            <img className="full-image" src={props.image} alt="#"/>
            <div>
                <button onClick={props.onChangeImage}>Change</button>
                <button onClick={props.onDelete}>Delete</button>
                <button onClick={props.defaultImage>Reset</button>
            </div>
        </div>
    )
};
Profile.propTypes = {
    image: PropTypes.string,
    onChangeImage: PropTypes.func,
    onDelete: PropTypes.func
};

Profile.defaultProps = {
    image: '/no-img.png',
    onChangeImage: () => {},
    onDelete: () => {}
};

export default Profile;

