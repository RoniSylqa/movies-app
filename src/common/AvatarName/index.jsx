import React from "react";

const AvatarName = (props) => {
	const {name, avatar} = props;
	return (
		<div className="avatar__and__name__container">
			<img src={avatar} alt="" className="avatar__and__name__container__avatar" />
			<h1 className="avatar__and__name__container__name">{name}</h1>
		</div>
	);
};

export default AvatarName;
