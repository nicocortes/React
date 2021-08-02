import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

import covidLogo from "../assets/covidLogo.png";

const CovidNavbar = () => {
	const history = useHistory();
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					<img className="app-logo" src={covidLogo} alt="App Logo" />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink
								className="nav-link"
								exact
								to="/"
								activeStyle={{
									fontWeight: "bold",
								}}
							>
								Inicio
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								exact
								to="/servicios"
								activeStyle={{
									fontWeight: "bold",
								}}
							>
								Servicios
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								exact
								to="/sobre-nosotros"
								activeStyle={{
									fontWeight: "bold",
								}}
							>
								Nosotros
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								exact
								to="/contacto"
								activeStyle={{
									fontWeight: "bold",
								}}
							>
								Contacto
							</NavLink>
						</li>
					</ul>
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item d-flex">
							<button
								className="btn btn-secondary "
								onClick={() => {
									localStorage.removeItem("covid_app_user");
									history.push("/login");
								}}
							>
								Salir
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default CovidNavbar;
