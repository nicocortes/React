import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CovidNavbar from "./components/CovidNavbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Services from "./pages/Services";

const App = () => {
	return (
		<Router>
			<CovidNavbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/servicios" component={Services} />
				<Route exact path="/sobre-nosotros" component={About} />
				<Route exact path="/contacto" component={Contact} />
				<Route component={Error404} />
			</Switch>
		</Router>
	);
};

export default App;
