import React from "react";
import {ReactComponent as NetfilxLogo} from "@assets/img/NetflixLogo.svg";
import {headerElements} from "@components/RawData";
import HeaderTypo from "./HeaderTypo";

const Header = () => (
	<div className="header__first__part__container">
		<NetfilxLogo className="header__first__part__container__logo" />
		{headerElements.map((item) => (
			<HeaderTypo text={item.name} />
		))}
	</div>
);

export default Header;
