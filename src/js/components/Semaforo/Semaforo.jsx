import React from "react";
import './semaforo.css';
export const Semaforo = ({ data }) => {
    const { color, setLuz, luz } = data
    return (
        <div
            className={`rounded-circle lights mx-auto my-3 ${luz === color ? `activo` : ""}`}
            onClick={() => { setLuz(color) }}
            style={{backgroundColor:color}}
        >
        </div>
    );
}