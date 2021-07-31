import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
	return (
		<div className="text-center error-body">
			<p className="error-title pt-5">Ooops!</p>
			<p>
				<h1>ERROR 404</h1>
				<h5>
					Estamos trabajando para que tangas la máxima experiencia mientras
					navegas por nuestra web. Mientras tanto puedes:
				</h5>
			</p>
			<Link to="/">
				<button className="btn btn-secondary me-3">IR A INICIO</button>
			</Link>
			<Link to="/contacto">
				<button className="btn btn-dark">CONTACTANOS</button>
			</Link>
		</div>
	);
};

export default Error404;
