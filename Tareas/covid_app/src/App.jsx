import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./helpers/protectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";

const App = () => {
	return (
		<Router>
			<Switch>
				<ProtectedRoute exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<ProtectedRoute exact path="/servicios" component={Services} />
				<ProtectedRoute exact path="/sobre-nosotros" component={About} />
				<ProtectedRoute exact path="/contacto" component={Contact} />
				<Route component={Error404} />
			</Switch>
		</Router>
	);
};

export default App;
