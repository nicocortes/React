import React from "react";
import aboutBanner from "../assets/aboutBanner.jpg";
import CovidFooter from "../components/CovidFooter";
import CovidNavbar from "../components/CovidNavbar";

const About = () => {
	return (
		<div>
			<CovidNavbar />
			<section>
				<img className="about-banner" src={aboutBanner} alt="About Banner" />

				<div className="container mt-5 py-5">
					<div className="row">
						<h1 className="text-center">¿Quiénes somos?</h1>
					</div>
					<hr />
					<div className="row  about-section">
						<div className="col-12 text-center">Una empresa tucumana</div>
						<div className="col-12 text-center ">
							con más de
							<span className="text-dark fst-italic">
								{" "}
								250.000 usuarios en el país.
							</span>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="container-fluid about-info p-0 py-5">
					<div className="row text-center ">
						<h5>
							<p>
								<b>¡Vos también podes ser parte!</b> Nacimos en 2019, y con
								esfuerzo y dedicación nos posicionamos como una de la empresa
								lider en el asesoramiento y cuidado de la salud de miles de
								Argentinos.
							</p>
							<p>
								Somos expertos en <span className="fst-italic">COVID19</span> y
								la prevención contra el mismo. Nuestos expertos trabajan 24/7
								para brindarte el mejor servicio. Además, contamos con{" "}
								<b>+20 servidores</b> en todo el país para que puedas utilizar
								nuestros servicios en un abrir y cerrar de ojos.
							</p>
						</h5>
					</div>
				</div>
			</section>
			<CovidFooter />
		</div>
	);
};

export default About;
