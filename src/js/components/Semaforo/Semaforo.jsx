import React from "react";
import './semaforo.css';
export const Semaforo = ({data}) =>{
    const {color, luzEncendida, colorActivo, luz} = data
    return (
        <div className={`${color} rounded-circle lights mx-auto my-3 ${luz === color ? `${luz}Activo` : ""}`} onClick={()=>{luzEncendida(color)}}>
        </div>
    );
}