import React from "react";
import { Semaforo } from "./Semaforo/Semaforo";
import "./main.css"
import { useState, useEffect } from "react";
//include images into your bundle
//create your first component
const Home = () => {
	const [colores, setColores] = useState(["red", "green", "yellow"])
	const [luz, setLuz] = useState("")
	const [autoActivado, setAutoActivado] = useState(false);
	const [index, setIndex] = useState(0);
	const coloresActual = colores
	const addPurple = () => {
		!colores.includes("purple") ? setColores([...colores, "purple"]) : setColores(colores.filter(color => color !== "purple"));
	};
	useEffect(() => {
		if (!autoActivado) return;

		const intervalo = setInterval(() => {
			setLuz(colores[index]);
			setIndex((prev) => (prev + 1) % colores.length);
		}, 2000);

		return () => clearInterval(intervalo);
	}, [autoActivado, index]);

	const randomColor = () => {
		let nuevosColores = []
		setColores([""])

		for (let index = 0; index < coloresActual.length; index++) {
			const randomHue = Math.floor(Math.random() * 100)
			const randomSaturation = Math.floor(Math.random() * 100)
			const randomLightness = Math.floor(Math.random() * 100)
			nuevosColores.push(`hsl(${randomHue},${randomSaturation}%,${randomLightness}%)`)
		}
		setColores(nuevosColores)
		console.log(colores);


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
									setLuz: setLuz,
									luz: luz
								}}
							/>
						))}
					</div>
					<div className="col-12 d-flex justify-content-between">
						<button className="btn btn-success  fs-2 fw-bold text-dark" onClick={() => addPurple()}>{colores.includes("purple") ? "Quitar la luz púrpura" : "Añadir luz púrpura"}</button>
						<button className="btn btn-info  fs-2 fw-bold text-dark" onClick={() => setAutoActivado(prev => !prev)}>Activar modo automatico</button>
						<button className="btn btn-warning  fs-2 fw-bold text-dark" onClick={() => randomColor()}>Colores aleatorios</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;