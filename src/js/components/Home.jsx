import React from "react";
import { Semaforo } from "./Semaforo/Semaforo";
import "./main.css"
import { useState } from "react";
//include images into your bundle
//create your first component
const Home = () => {
	let colores = ["red", "yellow", "green"]
	const [luz, setLuz] = useState("")
	const colorActivo = luz;
	const luzEncendida = (color) => {
		setLuz(color)

	}
	return (
		<>
			<div className="container">
				<div className="row  d-flex justify-content-center align-items-center vh-100 ">
					<div className="col-2 mx-auto bg-dark py-2 semaforo rounded">
						{colores.map((item, index) => (
							<Semaforo
								key={index}
								data={{
									color: item,
									luzEncendida: luzEncendida,
									colorActivo: colorActivo,
									luz: luz
								}}
							/>
						))}
					</div>
					<div className="col-12">
						<button className="btn btn-success">Añadir color púrpura</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;