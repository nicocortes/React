import React from "react";

const CovidGlobalInfo = ({ covidData }) => {
	return (
		<div className="container">
			<div className="row ">
				<h1 className="text-white mt-5">
					<b>
						Cifras globales <span className="fst-italic">#COVID19</span>
					</b>
				</h1>
			</div>
			<div className="row mt-5 table-responsive">
				{covidData.data.map((covid) => (
					<table>
						<tbody className="table-global">
							<tr className="new-confirmed">
								<td>Nuevos confirmados</td>
								<td>{covid.NewConfirmed}</td>
							</tr>
							<tr className="new-confirmed">
								<td>Nuevas Muertes</td>
								<td>{covid.NewDeaths}</td>
							</tr>
							<tr className="total-confirmed">
								<td>Total Confirmados</td>
								<td>{covid.TotalConfirmed}</td>
							</tr>
							<tr className="total-confirmed">
								<td>Total Muertes</td>
								<td>{covid.TotalDeaths}</td>
							</tr>
							<tr className="total-confirmed">
								<td>Total Recuperados</td>
								<td>{covid.TotalRecovered}</td>
							</tr>
						</tbody>
					</table>
				))}
			</div>
		</div>
	);
};

export default CovidGlobalInfo;
