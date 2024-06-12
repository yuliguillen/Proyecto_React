import React from "react";
import Card from "../Card";
import Hola from "../Saludo";
import imagenbob from "../image/stich.png"
import imagencal from "../image/stich_rosa.png"
import Iteracion from "../Itinerante";
import Addb from "../boton";

export default class Maestro extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[{
                "id":1,
                "nombre":"Stitch",
                "descripcion":" Stitch, también conocido como Experimento 626, es una criatura genéticamente modificada para causar caos y destrucción. Este pequeño alienígena es el resultado de los experimentos científicos del Dr. Jumba Jookiba, un científico espacial loco.",
                "img":imagenbob,
                "color":"#6AC8F7"
            },
            {
                "id":2,
                "nombre":"Angela",
                "descripcion":"Ángel es el Experimento 624 , Es Una de los primos de Stitch , el experimento Siendo 624 de Jumba . Stitch está enamorado de ella, y ella de él.",
                "img":imagencal,
                "color":"#F76AF3"
            }
        ]
        }

    }
    render(){
        return(
        <div>
            <Hola
                username="Yuli"
            />
            <Iteracion
                chao={this.state.data}
            />
            <Addb/>
        </div>
        )
    }
}