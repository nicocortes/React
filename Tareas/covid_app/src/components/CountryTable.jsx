import React from "react";

const CountryTable = () => {
	return (
		<table className="table">
			<thead>
				<tr>
					<th className="scope">País</th>
					<th className="scope">Total confirmados</th>
					<th className="scope">Total muertes</th>
					<th className="scope">Total recuperados</th>
				</tr>
			</thead>
			<tbody></tbody>
		</table>
	);
};

export default CountryTable;
