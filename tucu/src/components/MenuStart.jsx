import React from "react";
import './styles/MenuStart.scss';

const MenuStart = () => {
    return (
        <div className="menustart-container">
            <ul>
                <li>
                    <a href="/Start">Inicio</a>
                </li>
                <li>
                    <a href="/Start">Domicilio</a>
                </li>
                <li>
                    <a href="/Start/Map">Seguimiento</a>
                </li>
            </ul>
        </div>
    )
}


export default MenuStart;