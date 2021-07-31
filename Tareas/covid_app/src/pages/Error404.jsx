import React from "react";

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
			<button className="btn btn-secondary me-3">INICIO</button>
			<button className="btn btn-dark">CONTACTANOS</button>
		</div>
	);
};

export default Error404;
