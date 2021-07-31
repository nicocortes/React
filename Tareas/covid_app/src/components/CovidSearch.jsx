import React from "react";

const CovidSearch = ({ inputValue, setInputValue }) => {
	const inputChange = (e) => {
		setInputValue(e.target.value);
	};
	return (
		<div className="container">
			<div className="row">
				<p className="search-title mt-5">¿Estás buscando tu país?</p>
			</div>
			<div className="row">
				<form className="w-75 m-auto">
					<input
						type="email"
						className="form-control"
						placeholder="Argentina"
						value={inputValue}
						onChange={inputChange}
					></input>

					<button type="submit" className="btn btn-dark w-100 mt-3">
						Buscar
					</button>
				</form>
			</div>
		</div>
	);
};

export default CovidSearch;
