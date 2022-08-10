import React from "react";
import DeliveryFilter from "../components/DeliveryFilter";
import DeliveryTable from "../components/DeliveryTable";
import MenuStart from "../components/MenuStart";
import NavHome from "../components/NavHome";
import './styles/Start.scss';


const Start = () => {
    return (
        <div>
            <NavHome />
            <div className="body-components">
                <MenuStart />
                <div className="deliveryService">
                    <DeliveryFilter />
                    <DeliveryTable />
                </div>

            </div>
        </div>
    )
}

export default Start;