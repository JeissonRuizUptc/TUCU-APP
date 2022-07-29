import React from "react";
import './styles/OurServices.scss';
import ServiceTarget from "../components/ServiceTarget";
import ButtonComp from '../components/ButtonComp';
import fastDeliveryImage from '../icons/FASTA DELIVERY.png';
import sameDayImage from '../icons/SAME DAY DELIVERY.png';
import sfLogisticoImage from '../icons/SOFTWARELOGISTICO.png';

const OurServices = () => {
    return (
        
        <div className="our-service">
            <div className="our-service-tittle">
                <h1>Nuestros servicios</h1>
            </div>

            <div className="our-service-targets">
                <ServiceTarget
                    title={"Same day delivery"}
                    text={"Recogemos los productos almacenados en tus bodegas y entregamos a tus clientes el mismo día."}
                    URLImage={sameDayImage}/>

                <ServiceTarget
                    title={"Fast delivery"}
                    text={"Recogemos los productos en tu establecimiento y los entregamos en la puerta del cliente en menor tiempo posible."}
                    URLImage={fastDeliveryImage}/>

                <ServiceTarget
                    title={"Software logistico"}
                    text={"Las marcas que usan nuestro servicio cuentan con un software el cual les permite solicitar de manera muy sencilla un domicilio."}
                    URLImage={sfLogisticoImage}/>

            </div>
            <div>
                <ButtonComp textButton={"Mas servicios"}/>
            </div>
        </div >
    )
}

export default OurServices;