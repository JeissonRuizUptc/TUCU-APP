import React from "react";
import ButtonComp from "./ButtonComp";
import './styles/TypeClient.scss';

const TypeClient = ({ title, URLImage }) => {

    return (
        <div className="type">

            <div className="type-target">

                <div className="type-target__img">
                    <img src={URLImage} alt="image-target" className="image-target" />
                </div>
                
                <div className="type-target__text">
                    <h2>{title}</h2>
                </div>

            </div>
        </div>
    )
}

export default TypeClient;