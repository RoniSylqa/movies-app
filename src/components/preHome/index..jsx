/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {ReactComponent as NetfilxLogo} from "@assets/img/NetflixLogo.svg";
import ButtonComponent from "@common/ButtonComponent/Index";
import SelectUser from "./SelectUser/SelectUser";

const PreHome = () => (
	<div className="prehome__container">
		<div className="prehome__container__header">
			<NetfilxLogo className="prehome__container__header__logo" />
		</div>
		<div className="prehome__container__users__container">
			<h1 className="prehome__container__users__container__text">Who's watching?</h1>
			<SelectUser />
			<ButtonComponent text="Manage Profiles" className="prehome__container__users__container__button" />
		</div>
	</div>
);

export default PreHome;
