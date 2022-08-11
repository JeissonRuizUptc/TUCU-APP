import React from "react";
import ButtonComp from "./ButtonComp";
import ButtonModel from "./ButtonModel";
import './styles/DeliveryTable.scss';

var today = new Date();

const DeliveryTable = () => {

    const data = [
        { nDomicilio: 1 , hSolicitud:  today.getHours() +1 + ':' + today.getMinutes() + ':' + today.getSeconds() ,
        tPreparacion: "10 minutos", tMora: "0 minutos", nDomicilario: "Andres Perez", direccion: "Diagonal 38#10-2", seguimiento: <ButtonModel textButton={'Seguir'} typeButton={'warning'}/>, cancelamiento: <ButtonModel textButton={'cancelar'} typeButton={'danger'}/> },
        { nDomicilio: 1 , hSolicitud:  today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() ,
        tPreparacion: "10 minutos", tMora: "0 minutos", nDomicilario: "Ana Diaz", direccion: "Carrera 9#4-22", seguimiento: <ButtonModel textButton={'Seguir'} typeButton={'warning'}/>, cancelamiento: <ButtonModel textButton={'cancelar'} typeButton={'danger'}/> },
        { nDomicilio: 1 , hSolicitud:  today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() ,
        tPreparacion: "10 minutos", tMora: "0 minutos", nDomicilario: "Daniel Ramiro Gonzales", direccion: "Diagonal 38#10-2", seguimiento: <ButtonModel textButton={'Seguir'} typeButton={'warning'}/>, cancelamiento: <ButtonModel textButton={'cancelar'} typeButton={'light'}/> },
        { nDomicilio: 1 , hSolicitud:  today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() ,
        tPreparacion: "10 minutos", tMora: "0 minutos", nDomicilario: "Jose Mauricio", direccion: "Carrera 9#4-22", seguimiento: <ButtonModel textButton={'Seguir'} typeButton={'warning'}/>, cancelamiento: <ButtonModel textButton={'cancelar'} typeButton={'danger'}/> },
        { nDomicilio: 1 , hSolicitud:  today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() ,
        tPreparacion: "10 minutos", tMora: "0 minutos", nDomicilario: "Andres Perez", direccion: "Cra 1a #7este-45", seguimiento: <ButtonModel textButton={'Seguir'} typeButton={'warning'}/>, cancelamiento: <ButtonModel textButton={'cancelar'} typeButton={'danger'}/> },
        { nDomicilio: 1 , hSolicitud:  today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() ,
        tPreparacion: "10 minutos", tMora: "0 minutos", nDomicilario: "Andres Perez", direccion: "Diagonal 38#10-2", seguimiento: <ButtonModel textButton={'Seguir'} typeButton={'warning'}/>, cancelamiento: <ButtonModel textButton={'cancelar'} typeButton={'light'}/> },
        { nDomicilio: 1 , hSolicitud:  today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() ,
        tPreparacion: "10 minutos", tMora: "0 minutos", nDomicilario: "Andres Perez", direccion: "Cra 1a #7este-45", seguimiento: <ButtonModel textButton={'Seguir'} typeButton={'warning'}/>, cancelamiento: <ButtonModel  textButton={'cancelar'} typeButton={'light'}/> }
        
    ]

    return (
        <div className="deliveryTable">
            <table>
                <tr>
                    <th>N° domicilio</th>
                    <th>Hora solicitud</th>
                    <th>Tiempo de preparacion {<br/>} restante</th>
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