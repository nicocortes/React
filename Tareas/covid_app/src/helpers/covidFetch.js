export const getCovidData = async () => {
	const resp = await fetch("https://api.covid19api.com/summary");
	const info = await resp.json();
	return info.Global;
};
