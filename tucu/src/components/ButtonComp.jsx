import React from "react"
import './styles/ButtonComp.scss';

const ButtonComp = ({ textButton }) => {
    return (
        <button type="button" className="btn btn-warning button-comp">{textButton}</button>
    )
}

export default ButtonComp;