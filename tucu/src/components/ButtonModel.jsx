import React from "react";
import './styles/ButtonModel.scss';

const ButtonModel = ({textButton, typeButton}) =>{
    if(typeButton==='warning'){
        typeButton="btn btn-warning button-model";
    }else if(typeButton==='danger'){
        typeButton="btn btn-danger button-model";
    }else if(typeButton==='light'){
        typeButton="btn btn-light button-model";
    }
    return(
        <div>
            <button type="button" className={typeButton}>{textButton}</button>
        </div>
    )
}

export default ButtonModel;