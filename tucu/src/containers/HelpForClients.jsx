import React from "react";
import ButtonComp from "../components/ButtonComp";
import TypeClient from "../components/TypeClient";
import './styles/HelpForClients.scss';
import startUpImg from '../icons/START UPS.png';
import ultimamMillaImg from '../icons/ULTIMA MILLA.png';
import bodegasImg from '../icons/BODEGAS OCULTAS.png';
import restaurantesImg from '../icons/RESTAURANTES.png';


const HelpForClients = ({tittle, textButton}) => {
    return (
        <div className="help">
            <div className="help-title">
                <h1>{tittle}</h1>
            </div>
            <div className="help-targets">
                <TypeClient title={"Start-Ups de domicilios"} URLImage={startUpImg}/>
                <TypeClient title={"Resaurantes"} URLImage={restaurantesImg}/>
                <TypeClient title={"Última milla"} URLImage={ultimamMillaImg}/>
                <TypeClient title={"Bodegas ocultas"} URLImage={bodegasImg}/>
            </div>
            
            <div className="help-button">
                <ButtonComp textButton={textButton}/>
            </div>
        </div >
    )
}

export default HelpForClients;
