/* eslint-disable react/button-has-type */
import React from "react";

const Button = (props) => {
	const {onClick, className = "", text, icon, type = "submit"} = props;
	return (
		<button type={type} className={`button__container ${className}`} onClick={onClick}>
			{icon && <img src={icon} alt="" className="button__container__img" />}
			{text}
		</button>
	);
};

export default Button;
