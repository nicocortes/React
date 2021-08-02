import React from "react";
import covidLogo from "../assets/covidLogo.png";
import CovidFooter from "../components/CovidFooter";
import CovidNavbar from "../components/CovidNavbar";

const Contact = () => {
	return (
		<div>
			<CovidNavbar />
			<section className="contact-body">
				<div className="container ">
					<div className="row text-center ">
						<div className="col-12 col-md-6 ">
							<img
								className="covid-logo-contact"
								src={covidLogo}
								alt="Covid Logo"
							/>
							<div className="col">
								<h3>
									<p className="fw-bold">
										Cuéntanos,
										<br />
										¿qué necesitas?
									</p>
								</h3>
							</div>
						</div>
						<div className="col">
							<form>
								<input
									type="text"
									class="form-control"
									aria-describedby="emailHelp"
									placeholder="Nombre"
								/>
								<input
									type="email"
									class="form-control mt-2"
									aria-describedby="emailHelp"
									placeholder="Email"
								/>
								<input
									type="tel"
									class="form-control mt-2"
									aria-describedby="emailHelp"
									placeholder="Teléfono"
								/>
								<textarea
									class="form-control mt-2"
									rows="3"
									placeholder="Dejanos tu mensaje..."
								></textarea>

								<button type="submit" class="btn btn-dark w-100 mt-4">
									Enviar
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
			<CovidFooter />
		</div>
	);
};

export default Contact;
