import React from "react";
import notFoundImg from'../icons/ERROR 404.png';
import './styles/NotFound.scss';

const NotFound = () => {
    return (
        <div className="notFound">
            <img src={notFoundImg} alt="" />
        </div>

    )
}

export default NotFound;