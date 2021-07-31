import React from "react";

const CovidSearch = () => {
	return (
		<div className="container">
			<div className="row">
				<p className="search-title mt-5">¿Estás buscando tu país?</p>
			</div>
			<div className="row">
				<form className="w-75 m-auto">
					<input
						type="email"
						class="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					></input>

					<button type="submit" class="btn btn-dark w-100 mt-3">
						Buscar
					</button>
				</form>
			</div>
		</div>
	);
};

export default CovidSearch;
