import React, { useEffect, useState } from "react";
import CovidFooter from "../components/CovidFooter";
import CovidGlobalInfo from "../components/CovidGlobalInfo";
import CovidNavbar from "../components/CovidNavbar";
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
			<CovidNavbar />
			<section className="section-global-info">
				<CovidGlobalInfo covidData={covidData} />
			</section>
			<section className="section-search">
				<CovidSearch />
			</section>
			<CovidFooter />
		</div>
	);
};

export default Home;
