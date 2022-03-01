import React from "react";
import {ReactComponent as SearchIcon} from "../../assets/img/SearchIcon.svg";
import {ReactComponent as NotificationIcon} from "../../assets/img/NotificationIcon.svg";
import {ReactComponent as ArrowDown} from "../../assets/img/ArrowDown.svg";
import avatar from "../../assets/img/avatar.png";

const Header = () => (
	<div className="header__second__part__container">
		<SearchIcon className="header__second__part__container__search__icon" />
		<div className="header__second__part__container__notification__container">
			<NotificationIcon className="header__second__part__container__notification__container__icon" />
			<div className="header__second__part__container__notification__container__alert">3</div>
		</div>
		<div className="header__second__part__container__options__container">
			<img src={avatar} alt="" className="header__second__part__container__options__container__avatar__icon" />
			<ArrowDown className="header__second__part__container__options__container__arrowdown__icon" />
		</div>
	</div>
);

export default Header;
