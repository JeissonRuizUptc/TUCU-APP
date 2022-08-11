import React from "react";
import ButtonComp from "./ButtonComp";
import ButtonModel from "./ButtonModel";
import './styles/DeliveryTable.scss';

var today = new Date();

const MapTable = () => {

    const data = [
        { nDomiciliario: 'N°' , distancia:  'Cliente' , tTotal: "Direccion entrega", entregas: "Hora del servicio",
         proceso: "Valor total" },    
         { nDomiciliario: '1' , distancia:  'Mauricio Gimenez' , tTotal: "Carrera 9#4-22", entregas: "10:45 am",
         proceso: "$22500" },
         { nDomiciliario: '2' , distancia:  'Andres Gonzales' , tTotal: "Dg 38 #10-2, Tunja", entregas: "11:50 am",
         proceso: "$22500" },
         { nDomiciliario: '3' , distancia:  'Andres Gonzales' , tTotal: "Carrera 9#4-22", entregas: "10:45 am",
         proceso: "$22500" }    
    ]

    return (
        <div className="deliveryTable">
            <table>
                <tr>
                    <th>Domiciliario Hernesto Perez</th>
                    <th>Distancia: 14,5 Km</th>
                    <th>Tiempo total 03:20:00</th>
                    <th>Entregas:52</th>
                    <th>Recaudos: $108.500</th>
                    <th>Proceso 1/1</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.nDomiciliario}</td>
                            <td>{val.distancia}</td>
                            <td>{val.tTotal}</td>
                            <td>{val.entregas}</td>
                            <td>{val.proceso}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );


}


export default MapTable;