import React from "react";
import OurServices from "../containers/OurServices";
import InformationComponent from "../components/InformationComponent";
import Benefits from "../containers/Benefits";
import HelpForClients from "../containers/HelpForClients";
import AboutUs from "../containers/AboutUs";
import AmountServices from "../containers/AmountServices";
import Footer from "../components/Footer";
import eligenIMG from '../icons/eligenIMG.png';
import repartidorIMG from '../icons/repartidorIMG.png';
import tarifasIMG from '../icons/tarifasIMG.png';
import Contact from "../containers/Contact";
import Header from "../components/Header";

const Home = () => {
    return (
        <div>
            <Header/>
            <AboutUs />
            <OurServices />
            <InformationComponent
                tittle={"¿Por qué nos eligen?"}
                content={"Las entregas a domicilio de manera informal, son la opción para subsistir de miles de personas en LATAM, sin embargo el trabajo informal crece en la misma medida que se multiplican el número de pedidos; convirtiéndose en uno de los grandes males tanto para clientes finales, plataformas de delivery o empresas que ofrecen a su cliente final este tipo de servicios y los mismos repartidores. "}
                urlImage={eligenIMG}
                textButton={"Quiero saber más"}
            />
            <Benefits />
            <HelpForClients tittle={"Clientes que podemos ayudar"} textButton={"Contáctanos"} />
            <InformationComponent
                tittle={"Quiero ser repartidor TUCU"}
                content={"Trabaja con nosotros y obtén TODOS los beneficios de un trabajo formal LEGAL. Puedes generar ingresos extra con un contrato de tiempo incompleto, pero si buscas trabajo de tiempo completo también eres bienvenid@."}
                urlImage={repartidorIMG}
                textButton={"Me interesa"} />

            <AmountServices title={"Cifras"} />
            <InformationComponent
                tittle={"Conoce nuestras tarifas"}
                content={"Para TUCU es importante conocer el número aproximado de entregas que realiza tu marca en días y horas de alta y baja demanda, con el fin de tener el personal necesario disponible para hacer determinadas entregas. Al realizar una alianza comercial con TUCU, tu marca contará con cobertura del volumen que tu marca necesita. ¡Contáctenos! y conoce los precios de tu ciudad."}
                urlImage={tarifasIMG}
                textButton={"Quiero saber más"} />
            <Contact />
            <Footer/>
        </div>
    )
}

export default Home;