import React from "react";
import ButtonComp from "./ButtonComp";
import DeliveryFilterForm from "./DeliveryFilterForm";
import './styles/DeliveryFilter.scss';

const DeliveryFilter = () => {
    return (
        <div className="filter">
            <div className="filter-container">
                <div className="filter-container_button">
                    <ButtonComp textButton={"¡Solicitar Domicilio!"} />
                </div>
                <div className="filter-container_form">
                    <DeliveryFilterForm tittleForm={"Ingresa tu direccion de entrega*"} holderText={"Crra 1 #1-1, las Quintas"} />
                    <DeliveryFilterForm tittleForm={"Numero telefono usuario*"} holderText={"32145678945"} />
                </div>
                <div className="filter-container_form">
                    <DeliveryFilterForm tittleForm={"Detalle de tu direccion"} holderText={"Crra 1 #1-1, las Quintas"} />
                    <DeliveryFilterForm tittleForm={"Numero telefono usuario*"} holderText={"32145678945"} />
                </div>
                <div className="filter-container_form">
                    <DeliveryFilterForm tittleForm={"Tiempo en estar listo tu pedido"} holderText={"10 minutos"} />
                    <p>Nota: Si el tiempo de preparacion es menor o igual a 10 minutos, no pondras cancelar el domicilio</p>
                </div>
            </div>
        </div>

    )
}


export default DeliveryFilter;