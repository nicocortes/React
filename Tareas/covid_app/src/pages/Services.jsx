import React from "react";
import { Link } from "react-router-dom";
import phone from "../assets/phone.png";
import calendar from "../assets/calendar.png";

const Services = () => {
	return (
		<div className="container-fluid text-center">
			<div className="row service-first py-5">
				<div className="col">
					<h1 className="fw-bold">SEGUIMIENTO 24/7</h1>
					<h4 className="text-white">
						Optá por nuestro plan de seguimiento personalizado. Notificaciones
						diarias con los datos y ultimos avances del COVID19.
					</h4>
				</div>
				<div className="col">
					<Link to="*">
						<img className="phone-logo" src={phone} alt="Phone logo" />
					</Link>
				</div>
			</div>
			<div className="row py-5 service-second">
				<div className="col">
					<Link to="*">
						<img className="calendar-logo" src={calendar} alt="Calendar logo" />
					</Link>
				</div>
				<div className="col">
					<h1 className="fw-bold">CALENDARIO DE VACUNAS</h1>
					<h4>
						Cuidá tu salud y la de tu familia. Avisos via mail y whatsapp de tus
						próximos turnos de vacunación, para que no se te pase ni un solo
						pinchazo!
					</h4>
				</div>
			</div>
			<div className="row py-5 service-subscribe">
				<h3 className="fw-bold">
					Suscríbite para obtener nuestros últimos lanzamientos
				</h3>
				<form className="w-50 m-auto">
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					></input>
					<button type="submit" className="btn btn-dark w-100 mt-3">
						Enviar
					</button>
				</form>
			</div>
		</div>
	);
};

export default Services;
