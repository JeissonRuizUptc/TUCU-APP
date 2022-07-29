import React from "react";
import './styles/AboutUs.scss';
import aboutUsImage from '../icons/aboutUs.png';
import ButtonComp from "../components/ButtonComp";

const AboutUs = () => {
    return (
        <div className="about">
            <div className="about-text">
                <div className="about-text_title">
                    <h1>¿Quienes somos?</h1>
                </div>
                <div className="about-text_paragraph">
                    <p>En TUCU ofrecemos  soluciones integrales en logística de última milla o delivery. <br/> <br/>

                        Estamos comprometidos en el mejoramiento de la calidad de las entregas que se hacen en LATAM. <br/> <br/>

                        Buscamos impactar positivamente la experiencia de nuestros aliados, clientes finales y los repartidores, bajo la premisa de trabajo digno, respeto, calidad y cumplimiento.
                    </p>
                </div>
                <ButtonComp textButton={"¡Contactanos!"} />
            </div>
            <div className="about-image">
                <img src={aboutUsImage} alt="logo" className="logo" />
            </div>
        </div>
    )
}

export default AboutUs;