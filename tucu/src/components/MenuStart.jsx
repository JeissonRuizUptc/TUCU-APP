import React from "react";
import './styles/MenuStart.scss';

const MenuStart = () => {
    return (
        <div className="menustart-container">
            <ul>
                <li>
                    <a href="/Start/DeliveryService">Inicio</a>
                </li>
                <li>
                    <a href="/">Domicilio</a>
                </li>
                <li>
                    <a href="/">Seguimiento</a>
                </li>
            </ul>
        </div>
    )
}


export default MenuStart;