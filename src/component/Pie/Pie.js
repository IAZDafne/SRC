import React from "react";
import './Pie.css';
import Redes from "../Redes/Redes";

function Pie(){
    return(
        <div className="pie-all">
            <div className="pie-container">
                <div className="logoNombre">
                    <img src={require("../Fotos/LOGO1.jpg")}
                        alt='Logo de Sistemas de Riego de Celaya  ' className="logo1"/>
                    <h3 className="Src1">Sistemas de Riego de Celaya </h3>
                    
                </div>
                <div className="pie-text">
                    <h2 className="phone">Tel:52+ 461-262-77-36</h2>
                    <h2 className="phone">Tel:52+ 461-119-70-07</h2>
                    <h2 className="email">Correo: sistemasderiegodecelaya@hotmail.com</h2>
                </div>
                <Redes/>  
            </div>
        </div>
    )
}
export default Pie;