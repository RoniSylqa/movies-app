import React from "react";
import {registredUsers} from "@components/RawData.js";
import AvatarName from "@common/AvatarName";

const SelectUser = () => (
	<div className="prehome__container__users__selection__container">
		{registredUsers.map((item) => (
			<AvatarName name={item.name} avatar={item.avatar} />
		))}
	</div>
);

export default SelectUser;
