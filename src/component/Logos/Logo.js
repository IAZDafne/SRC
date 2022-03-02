import { React } from "react";
import './Logo.css'

function Logo (){
    return (
        <div className="logoNombre">
                    <img src={require("../Fotos/LOGO1.jpg")}
                        alt='Logo de Sistemas de Riego de Celaya  ' className="logo"/>
                    <h1 className="Src">Sistemas de Riego de Celaya</h1>
              </div>
    )
}

export default Logo;