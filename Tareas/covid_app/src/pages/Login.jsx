import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import covidContact from "../assets/covidContact.png";

const Login = () => {
	const history = useHistory();

	const [inputLogin, setInputLogin] = useState({
		email: "",
		password: "",
	});

	const handleChange = (event) => {
		setInputLogin({
			...inputLogin,
			[event.target.name]: event.target.value,
		});
	};

	function handleSubmit(event) {
		event.preventDefault();
		if (inputLogin.email === "") {
			alert("falta email");
			return;
		}
		if (inputLogin.password === "") {
			alert("falta contraseña");
			return;
		}
		localStorage.setItem("covid_app_user", JSON.stringify(inputLogin));
		history.push("/");
	}

	return (
		<section className="login-section ">
			<div className="container text-center login-container">
				<div className="row h-100">
					<div className="col bg-dark login-border-logo d-flex align-items-center justify-content-center">
						<img className="login-logo" src={covidContact} alt="Logo Covid" />
					</div>
					<div className="col login-border-form bg-white d-flex flex-column justify-content-center  ">
						<h3>
							Bienvenido a <b>Covid19 App</b>
						</h3>

						<form className="w-100" onSubmit={handleSubmit}>
							<input
								onChange={handleChange}
								type="email"
								className="form-control mt-2"
								placeholder="Email"
								name="email"
								required
							/>
							<input
								onChange={handleChange}
								type="password"
								className="form-control mt-2"
								placeholder="Contraseña"
								name="password"
								required
							/>

							<button type="submit" className="btn btn-dark w-100 mt-4">
								Ingresar
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
