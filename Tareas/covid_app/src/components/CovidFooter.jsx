import React from "react";
import { Link } from "react-router-dom";
import covidLogo from "../assets/covidLogo.png";

const CovidFooter = () => {
	return (
		<footer className="container-fluid text-center bg-dark text-white footer-container">
			<div className="row  pt-5">
				<div className="col-12 col-md-4">
					<Link to="/">
						<img className="app-logo" src={covidLogo} alt="Footer Logo" />
					</Link>
				</div>
				<div className="col-12 col-md-4">
					<Link className="text-decoration-none text-white" to="*">
						<h5>Vacunate! Solicitá tu turno</h5>
					</Link>
				</div>
				<div className="col-12 col-md-4">
					<span>
						Tucumán, Argentina
						<br />
						+543814456699
						<br /> covid19app@gmail.com
					</span>
				</div>
			</div>
			<div className="row text-secondary">
				<small>&copy; Covid19App 2021. Todos los derechos reservados.</small>
			</div>
		</footer>
	);
};

export default CovidFooter;
