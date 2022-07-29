import React from "react";
import ButtonComp from "./ButtonComp";
import './styles/InformationTarget.scss';
const InformationTarget = ({ tittle, content, urlImage, textButton }) => {
    return (
        <div className="information">
            <div className="information-title">
                <h1>{tittle}</h1>
            </div>
            <div className="information-content">
                <div className="information-text">
                    <div className="information-text_paragraph">
                        <p>{content}</p>
                    </div>
                    <ButtonComp textButton={textButton}/>
                </div>
                <div className="information-image">
                    <img src={urlImage} alt="logo" className="information-image" />
                </div>
            </div>

        </div>
    )
}
export default InformationTarget;