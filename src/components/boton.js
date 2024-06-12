import React from "react";
import B from './image/boton.png'
import './style/boton.css'

export default function Addb(props){
    return(
        <div className="fboton">
        <a href="/pagina/new">
            <img src={B} className="boton"/>
        </a>
        </div>
    )
}
