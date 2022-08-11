import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeliveryFilter from "../components/DeliveryFilter";
import DeliveryTable from "../components/DeliveryTable";
import MapService from "../components/MapService";
import MapTable from "../components/MapTable";
import MenuStart from "../components/MenuStart";
import NavHome from "../components/NavHome";
import Home from "./Home";
import './styles/Start.scss';


const Start = () => {
    return (

        <div>
            <NavHome />
            <div className="body-components">
                <MenuStart />
                <div className="services">
                    
                    <div className="map service">
                        <MapService/>
                        <MapTable />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Start;
