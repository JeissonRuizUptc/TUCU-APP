import React from 'react';
import TypeClient from "../components/TypeClient";
import './styles/AmountServices.scss';
import empleosIcon from '@icons/cifras-empleos.png';
import entregasIcon from '@icons/cifras-entregas.png';
import aliadosIcon from '@icons/cifras-aliados.png';

const AmountServices = ({title}) =>{
    return(
        <div className="amount">
            <div className="amount-title">
                <h1>{title}</h1>
            </div>
            <div className="amount-targets">
                <TypeClient title={"Empleos"} URLImage={empleosIcon}/>
                <TypeClient title={"Entregas"} URLImage={entregasIcon}/>
                <TypeClient title={"Afiliados"} URLImage={aliadosIcon}/>
                <TypeClient title={"Integraciones"} URLImage={empleosIcon}/>
            </div>
        </div >
    )
}


export default AmountServices;