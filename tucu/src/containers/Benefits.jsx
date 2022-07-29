import React from "react";
import './styles/Benefits.scss';
import ServiceTarget from "../components/ServiceTarget";
import entregasIMG from '../icons/ENTREGAS.png';
import gestionIMG from '../icons/GESTION.png';
import softwareIMG from '../icons/SOFTWARE LOGISTICO.png';

const Benefits = () => {
    return (
        <div className="benefit">
            <div className="benefit-tittle">
                <h1>Beneficios</h1>
            </div>
            <div className="benefit-targets">

                <ServiceTarget
                    title={"Entregas"}
                    text={"Entregas en el tiempo que tu y tu cliente lo requieren."}
                    URLImage={entregasIMG}
                />

                <ServiceTarget
                    title={"Gestion"}
                    text={"Tú eres experto en lo que haces, nosotros en que tus paquetes lleguen a tiempo a las manos de tus clientes."}
                    URLImage={gestionIMG}
                />

                <ServiceTarget
                    title={"Software logistico"}
                    text={"Software Logístico que permite que tus clientes conozcan la ubicación de sus paquetes durtante el proceso de entrega."}
                    URLImage={softwareIMG}
                />
                
            </div>
        </div >
    )
}

export default Benefits;