import React, { useEffect, useState } from "react";
import CovidGlobalInfo from "../components/CovidGlobalInfo";
import CovidSearch from "../components/CovidSearch";
import { getCovidData } from "../helpers/covidFetch";

const Home = () => {
	const [covidData, setCovidData] = useState({
		data: [],
		update: true,
		loading: true,
	});

	useEffect(() => {
		getCovidData().then((resp) => {
			setCovidData({
				data: [resp],
				update: false,
				loading: false,
			});
		});
	}, []);

	return (
		<div>
			<section id="section-global-info">
				<CovidGlobalInfo covidData={covidData} />
			</section>
			<section id="section-search">
				<CovidSearch />
			</section>
		</div>
	);
};

export default Home;
