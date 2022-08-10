import React from "react";
import ButtonComp from "./ButtonComp";
import './styles/DeliveryTable.scss';

var today = new Date();

const DeliveryTable = () => {

    const data = [
        { nDomicilio: 1 , hSolicitud:  today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() ,
        tPreparacion: "10 minutos", tMora: "0 minutos", nDomicilario: "Andres Perez", direccion: "Diagonal 38#10-2", seguimiento: <ButtonComp textButton={'Seguir'}/>, cancelamiento: <ButtonComp textButton={'cancelar'}/> },
        { nDomicilio: 1 , hSolicitud:  today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() ,
        tPreparacion: "10 minutos", tMora: "0 minutos", nDomicilario: "Andres Perez", direccion: "Diagonal 38#10-2", seguimiento: <ButtonComp textButton={'Seguir'}/>, cancelamiento: <ButtonComp textButton={'cancelar'}/> },
        { nDomicilio: 1 , hSolicitud:  today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() ,
        tPreparacion: "10 minutos", tMora: "0 minutos", nDomicilario: "Andres Perez", direccion: "Diagonal 38#10-2", seguimiento: <ButtonComp textButton={'Seguir'}/>, cancelamiento: <ButtonComp textButton={'cancelar'}/> },
        { nDomicilio: 1 , hSolicitud:  today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() ,
        tPreparacion: "10 minutos", tMora: "0 minutos", nDomicilario: "Andres Perez", direccion: "Diagonal 38#10-2", seguimiento: <ButtonComp textButton={'Seguir'}/>, cancelamiento: <ButtonComp textButton={'cancelar'}/> },
        { nDomicilio: 1 , hSolicitud:  today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() ,
        tPreparacion: "10 minutos", tMora: "0 minutos", nDomicilario: "Andres Perez", direccion: "Diagonal 38#10-2", seguimiento: <ButtonComp textButton={'Seguir'}/>, cancelamiento: <ButtonComp textButton={'cancelar'}/> },
        
    ]

    return (
        <div className="deliveryTable">
            <table>
                <tr>
                    <th>N° domicilio</th>
                    <th>Hora solicitud</th>
                    <th>Tiempo de preparacion restante</th>
                    <th>Tiempo de mora</th>
                    <th>Domiciliario</th>
                    <th>Direccion</th>
                    <th>Seguimiento</th>
                    <th>Cancelacion</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.nDomicilio}</td>
                            <td>{val.hSolicitud}</td>
                            <td>{val.tPreparacion}</td>
                            <td>{val.tMora}</td>
                            <td>{val.nDomicilario}</td>
                            <td>{val.direccion}</td>
                            <td>{val.seguimiento}</td>
                            <td>{val.cancelamiento}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );


}


export default DeliveryTable;