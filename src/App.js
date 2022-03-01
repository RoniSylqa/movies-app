import React from "react";
import "./App.css";
import {withRouter} from "react-router";
import {Redirect, Route, Router, Switch} from "react-router-dom";
import PreHome from "@components/preHome/index.";
import Home from "./components/home/index";
import history from "./utils/history";

const App = () => (
	<Router history={history}>
		<Route
			render={() => (
				<Switch>
					<Route component={Home} exact path="/" />
					<Route component={PreHome} exact path="/select-user" />
					<Redirect to="/" />
				</Switch>
			)}
		/>
	</Router>
);

export default withRouter(App);
