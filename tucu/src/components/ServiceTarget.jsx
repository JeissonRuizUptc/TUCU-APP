import React from "react";
import './styles/ServiceTarget.scss';

const ServiceTarget = ({ title, text, URLImage }) => {
    return (
        <div className="service">
            <div className="service-targets__target">
                <img src={URLImage} alt="image-target" className="service-image" />
                <div className="service-targets__target-text">
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
            </div>
        </div>

    )
}

export default ServiceTarget;