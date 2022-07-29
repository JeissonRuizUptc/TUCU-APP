import React from 'react';
import './styles/Notice.scss';

const Notice = ({ title, text, URLImage }) =>{
    return(
        <div className="notice">
            <div className="notice-target">
                <img src={URLImage} alt="image-target" className="notice-target__image" />
                <div className="notice-target__text">
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Notice;