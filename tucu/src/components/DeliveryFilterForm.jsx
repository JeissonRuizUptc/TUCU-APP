import React from "react";
import './styles/DeliveryFilterForm.scss';

const DeliveryFilterForm = ({tittleForm, holderText}) => {
    return (
        <div>
            <div className="form-filter form-group ">
                <label for="exampleInputEmail1">{tittleForm}</label>
                <input type="text" className="form-control" id="exampleText" aria-describedby="exampleText" placeholder={holderText} />
            </div>
        </div>
    )
}

export default DeliveryFilterForm;