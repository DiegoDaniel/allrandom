import React, { Component } from 'react';
import '../../css/componentsCSS/torneos.css';
//import imgBack from '../../img/table-background/backTorneo.png';

class Torneos extends Component {
    
    /*componentWillMount(){

    }*/

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-md-2 col-sm-2">                            
                        </div>
                        <div className="col-md-8 col-sm-8">
                            <br/><br/><br/><br/>
                                <div className="table-responsive ">
                                <table className="table table-hover table-sm">
                                    <caption className="customCaption">* Las inscripciones <b>cierran</b> dos d&iacute;as antes de la <b>fecha del torneo</b>, a las 18hs GMT-3</caption>
                                    <thead>
                                        <tr>
                                        <th scope="col">Estilo</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Inscripci&oacute;n</th>
                                        <th scope="col">FyH Torneo</th>
                                        <th scope="col">Cupos</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2v2 Abismo</td>
                                            <td className="tdCerrado">Cerrado</td>
                                            <td>-----</td>
                                            <td>19/12/2019 18:00 (GMT-3)</td>
                                            <td>16/16 Duos</td>
                                        </tr>
                                        <tr>
                                            <td>1v1 Abismo</td>
                                            <td className="tdAbierto">Abierto</td>
                                            <td className="tdAbierto tdInscribirse">¡Inscribirse!</td>
                                            <td>20/12/2019 18:00 (GMT-3)</td>
                                            <td>12/16</td>
                                        </tr>
                                        <tr>
                                            <td>2v2 Abismo</td>
                                            <td className="tdInscripto">Inscripto</td>
                                            <td>-----</td>
                                            <td>31/12/2019 18:00 (GMT-3)</td>
                                            <td>14/16 Duos</td>
                                        </tr>
                                        <tr>
                                            <td>5v5 Grieta</td>
                                            <td>Pr&oacute;ximamente</td>
                                            <td>1/1/2020 00:01 (GMT-3)</td>
                                            <td className="tdPendiente">Pendiente</td>
                                            <td className="tdPendiente">Pendiente</td>
                                        </tr>
                                        <tr>
                                            <td>TFT</td>
                                            <td>Pr&oacute;ximamente</td>
                                            <td className="tdPendiente">Pendiente</td>
                                            <td className="tdPendiente">Pendiente</td>
                                            <td className="tdPendiente">Pendiente</td>
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                            <br/><br/><br/><br/>
                        </div>
                        <div className="col-md-2 col-sm-2">
                        
                        </div>
                    </div>
                </div>  
                
            </div>
        )
    }
}
export default Torneos;