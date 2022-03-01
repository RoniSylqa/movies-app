import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import Header from "@common/Header/index";

const Home = () => (
	<div className="home">
		<Header />
	</div>
);

const mapStateToProps = (state) => ({
	data: state.app.home.index,
});
export default connect(mapStateToProps, null)(withRouter(Home));
